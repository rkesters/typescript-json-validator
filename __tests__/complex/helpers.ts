import { isError, isString } from 'lodash';
import { isUuid as validateUUID, toParentPathFormat, Uuid } from '../uuid';
import { AllowedTypeNames, AllowedTypes, cleanAndValidate, validate } from './generated/types.validator';
import { IEquipment, IEquipmentExpanded } from './types';

export type exactReturn = { isValid: true } | { isValid: false; error: Error };
export type permissiveReturn<T extends AllowedTypes> = { isValid: true; value: T } | { isValid: false; error: Error };

function castError(err: unknown): Error {
	if (isError(err)) return err;
	if (isString(err)) return new Error(err);
	return new Error('Caught error of unknown type.');
}

export function isExactGeneric(e: object, type: AllowedTypeNames): exactReturn {
	try {
		validate(type)(e);
		return { isValid: true };
	} catch (err) {
		return { isValid: false, error: castError(err) };
	}
}

export function isValidGeneric<T extends AllowedTypes>(e: object, type: AllowedTypeNames): permissiveReturn<T> {
	try {
		const a: T = cleanAndValidate(type)({ ...e });
		return { isValid: true, value: a };
	} catch (error) {
		return { isValid: false, error: castError(error) };
	}
}
export interface generateValidatorsReturnNoNew<typeType extends AllowedTypes> {
	isValidWrapped: (e: object) => exactReturn;
	encodeWrapped: (e: object) => permissiveReturn<typeType>;

	isValid: (e: object) => exactReturn;
	encode: (e: object) => typeType;
}

export interface generateValidatorsReturnWithNew<typeType extends AllowedTypes, newType extends AllowedTypes | undefined> extends generateValidatorsReturnNoNew<typeType> {
	isValidForNewWrapped: (e: object) => exactReturn;
	encodeForNewWrapped: (e: object) => permissiveReturn<NotUndefined<newType>>;

	isValidForNew: (e: object) => exactReturn;
	encodeForNew: (e: object) => newType;
}

type NotUndefined<T> = T extends undefined ? never : T;

export function generateValidators<typeType extends AllowedTypes>(typeName: AllowedTypeNames): generateValidatorsReturnNoNew<typeType>;
export function generateValidators<typeType extends AllowedTypes, newType extends AllowedTypes>(
	typeName: AllowedTypeNames,
	newTypeName: AllowedTypeNames,
): generateValidatorsReturnWithNew<typeType, newType>;
export function generateValidators<typeType extends AllowedTypes, newType extends AllowedTypes | undefined = undefined>(
	typeName: AllowedTypeNames,
	newTypeName?: AllowedTypeNames,
): generateValidatorsReturnNoNew<typeType> | generateValidatorsReturnWithNew<typeType, NotUndefined<newType>> {
	const out: generateValidatorsReturnNoNew<typeType> = {
		isValidWrapped: (e: object): exactReturn => isExactGeneric(e, typeName),
		encodeWrapped: (e: object): permissiveReturn<typeType> => isValidGeneric<typeType>(e, typeName),

		isValid: (e: object): exactReturn => validate(typeName)(e),
		encode: (e: object): typeType => cleanAndValidate(typeName)({ ...e }),
	};
	if (!newTypeName) {
		return out;
	}

	const final: generateValidatorsReturnWithNew<typeType, newType> = {
		...out,
		isValidForNewWrapped: (e: object): exactReturn => isExactGeneric(e, newTypeName),
		encodeForNewWrapped: (e: object): permissiveReturn<NotUndefined<newType>> => isValidGeneric<NotUndefined<newType>>(e, newTypeName),

		isValidForNew: (e: object): exactReturn => validate(newTypeName)(e),
		encodeForNew: (e: object): newType => cleanAndValidate(newTypeName)({ ...e }),
	};

	return final;
}

interface TreeNode<T> {
	parent?: T;
	children?: T[];
}

/**
 * Call {@link walkFn} for each node in the given tree. This method walks
 * up (i.e. parents), down (i.e. children) or both directions in the tree.
 *
 * There are no gurantees on a paticular order in which the nodes are visited.
 *
 * This function will visit each node exactly once, even if the node appears
 * multiple times in the tree.
 * @param node A node in the tree to start walking from.
 * @param walkFn Function to call for each node in the tree. Return false to
 *               stop walking.
 * @param direction Direction to walk the tree. Up (parents), down (children) or
 *                  both.
 */
export function walkTree<T extends TreeNode<T>>(node: T, walkFn: (n: T) => boolean | void, direction: 'both' | 'down' | 'up' = 'both'): void {
	let curr: T | undefined = node;
	const toVisit: T[] = [];
	const visited = new Set<T>();
	while (curr !== undefined) {
		if (!visited.has(curr)) {
			if (walkFn(curr) === false) {
				return;
			}

			visited.add(curr);

			if (direction !== 'down' && curr.parent) {
				toVisit.push(curr.parent);
			}

			if (direction !== 'up' && curr.children) {
				toVisit.push(...curr.children);
			}
		}

		curr = toVisit.shift();
	}
}

/**
 * Determine whether some equipment is a descendant of some other equipment.
 * @param descendant Descendant.
 * @param ancestorId ID of the anscestor.
 * @returns `true` if `descendant` is a descendant of some equipment with ID
 *          `ancestorId`; false otherwise.
 */
export function isDescendant(descendant: Readonly<Pick<IEquipment | IEquipmentExpanded, 'parentId' | 'parentPath'>>, ancestorId: Uuid): boolean {
	if (!validateUUID(ancestorId)) {
		throw new Error('Invalid ancestorId. It must be a UUID.');
	}

	if (descendant.parentId) {
		if (!validateUUID(descendant.parentId)) {
			throw new Error('Invalid parentId. It must be a UUID.');
		}

		if (descendant.parentId === ancestorId) {
			return true;
		}
	}

	if (descendant.parentPath) {
		return descendant.parentPath.indexOf(toParentPathFormat(ancestorId)) != -1;
	}

	return false;
}
