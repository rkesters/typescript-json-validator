/* tslint:disable */
import { Uuid } from '../../uuid';

export type AlertType = 'Critical' | 'Info' | 'Warning';
export type AnalyticsState = 'installed' | 'installing' | 'running' | 'staged' | 'uploading';
export type BlockType = 'Action' | 'Driver' | 'Process' | 'Resource';
export type EquipmentLifecycle = 'Active Spare' | 'Decommissioned' | 'In Use' | 'Spare';
export type EquipmentStatus = 'degraded' | 'failed' | 'healthy' | 'unknown';
export type PlatformType = 'Field' | 'FieldMaster' | 'MOC';
export type PortDirectionType = 'Consumes' | 'Provides';
export type PortTypeKind = 'Control' | 'Electrical' | 'Physical' | 'TCP' | 'UDP' | 'UserDefined' | 'Virtual';
export type TemplatePlatformsStatus = 'Active' | 'Deleted' | 'Draft';

export interface Alerts {
	acknowledged?: boolean;
	alertType: AlertType;
	createdAt?: Date;
	details: string;
	id: Uuid;
	platformId: Uuid;
	title: string;
	updatedAt?: Date;
}

export interface Analytics {
	clusterLocation: string;
	configSchemasId?: Uuid;
	createdAt?: Date;
	description: string;
	name: string;
	path: string;
	platformId: Uuid;
	source: string;
	state: AnalyticsState;
	supportedDataFormats: Array<string>;
	supportedDataTypes: Array<string>;
	uischema?: any;
	updatedAt?: Date;
}

export interface Blocks {
	blockType: BlockType;
	configSchemasId?: Uuid;
	createdAt?: Date;
	id: Uuid;
	manufacturer: string;
	model: string;
	name: string;
	uischema?: any;
	updatedAt?: Date;
	version: string;
}

export interface BlocksView {
	blockType?: BlockType;
	cardinality?: string;
	configSchemasId?: Uuid;
	createdAt?: Date;
	id: Uuid;
	manufacturer?: string;
	model?: string;
	name?: string;
	platformId?: Uuid;
	supportsManufacturer?: string;
	supportsModel?: string;
	supportsSerialNumber?: string;
	supportsVersion?: string;
	uischema?: any;
	updatedAt?: Date;
	version?: string;
}

export interface DataTypes {
	comment?: string;
	createdAt?: Date;
	description: string;
	hash?: string;
	id: Uuid;
	label: string;
	name: string;
	updatedAt?: Date;
}

export interface DriverBlocks {
	cardinality: string;
	createdAt?: Date;
	id: Uuid;
	platformId?: Uuid;
	supportsManufacturer: string;
	supportsModel: string;
	supportsSerialNumber: string;
	supportsVersion: string;
	updatedAt?: Date;
}

export interface Equipment {
	backImageId?: Uuid;
	configSchemasId?: Uuid;
	configuration?: any;
	controlNumber?: string;
	createdAt?: Date;
	description?: string;
	driverId?: Uuid;
	equipmentTypeId: Uuid;
	frontImageId?: Uuid;
	hash?: string;
	id: Uuid;
	internalImageId?: Uuid;
	lifecycle: EquipmentLifecycle;
	manufacturer: string;
	metric?: any;
	model: string;
	name: string;
	notes?: string;
	parentId?: Uuid;
	parentPath?: string;
	serialNumber: string;
	status?: EquipmentStatus;
	uischema?: any;
	updatedAt?: Date;
	version: string;
}

export interface EquipmentGroups {
	autoActivateHotSpares: boolean;
	createdAt?: Date;
	id: Uuid;
	numHealthyThreshold: number;
	updatedAt?: Date;
}

export interface EquipmentGroupsView {
	autoActivateHotSpares?: boolean;
	createdAt?: Date;
	description?: string;
	id?: Uuid;
	name?: string;
	notes?: string;
	numHealthyThreshold?: number;
	parentId?: Uuid;
	parentPath?: string;
	updatedAt?: Date;
}

export interface EquipmentImages {
	createdAt?: Date;
	filename: string;
	hash: string;
	id: Uuid;
	image: ArrayBuffer;
	mimeType: string;
	updatedAt?: Date;
}

export interface EquipmentTypes {
	comment?: string;
	createdAt?: Date;
	description: string;
	hash?: string;
	id: Uuid;
	label: string;
	name: string;
	updatedAt?: Date;
}

export interface Flows {
	createdAt?: Date;
	flowgraph: any;
	id: Uuid;
	name: string;
	platformId?: Uuid;
	updatedAt?: Date;
}

export interface MetricQueryParameters {
	dataTypeId: Uuid;
	description?: string;
	id: Uuid;
	label: string;
	name: string;
}

export interface MetricSources {
	description: string;
	id: Uuid;
	label: string;
	name: string;
	sourceTypeId: number;
}

export interface MetricTemplateToQuery {
	id: Uuid;
	metricQueryParameterId: Uuid;
	metricTemplateId: Uuid;
}

export interface MetricTemplates {
	dataTypeId: Uuid;
	description: string;
	id: Uuid;
	label: string;
	metricSourceId: Uuid;
	metricStyle?: string;
	name: string;
}

export interface Notifications {
	createdAt?: Date;
	id: Uuid;
	instance: string;
	payload: any;
	personality: string;
	time: number;
	topic: string;
	updatedAt?: Date;
}

export interface Platforms {
	antennaType?: string;
	az?: number;
	createdAt?: Date;
	el?: number;
	hash?: string;
	id: Uuid;
	location: string;
	platformType: PlatformType;
	state: string;
	surveyMode?: string;
	updatedAt?: Date;
}

export interface PlatformsView {
	antennaType?: string;
	az?: number;
	configuration?: any;
	controlNumber?: string;
	createdAt?: Date;
	description?: string;
	el?: number;
	equipmentTypeId?: Uuid;
	hash?: string;
	id?: Uuid;
	lifecycle?: EquipmentLifecycle;
	location?: string;
	manufacturer?: string;
	model?: string;
	name?: string;
	notes?: string;
	parentId?: Uuid;
	platformType?: PlatformType;
	serialNumber?: string;
	state?: string;
	status?: EquipmentStatus;
	surveyMode?: string;
	updatedAt?: Date;
	version?: string;
}

export interface PortTypes {
	createdAt?: Date;
	id: Uuid;
	kind: PortTypeKind;
	label: string;
	name: string;
	updatedAt?: Date;
}

export interface Ports {
	blockId?: Uuid;
	bridgeable?: boolean;
	configSchemasId?: Uuid;
	configuration?: any;
	connectedToId?: string;
	count: number;
	description?: string;
	discrete?: boolean;
	equipmentId?: Uuid;
	id: Uuid;
	label: string;
	name: string;
	portDirection: PortDirectionType;
	portTypeId: Uuid;
	required: boolean;
	uischema?: any;
}

export interface ScheduledActions {
	createdAt?: Date;
	cronSchedule: string;
	effectiveDate?: Date;
	endDate?: Date;
	flowId?: Uuid;
	id: Uuid;
	name: string;
	platformId?: Uuid;
	updatedAt?: Date;
}

export interface Schemas {
	createdAt?: Date;
	id: Uuid;
	name: string;
	schema: any;
	uischema?: any;
	updatedAt?: Date;
}

export interface SubsToNotifications {
	createdAt?: Date;
	id: Uuid;
	notificationId: Uuid;
	subscriptionId: Uuid;
	updatedAt?: Date;
}

export interface Subscriptions {
	by?: string;
	callbackUrl?: string;
	createdAt?: Date;
	ensureReceive?: boolean;
	id: Uuid;
	instance: string;
	personality: string;
	time: number;
	topic: string;
	updatedAt?: Date;
}

export interface SurveyResults {
	collectedAt: Date;
	createdAt?: Date;
	frequency: Array<number>;
	power: Array<number>;
	surveyId: Uuid;
	updatedAt?: Date;
}

export interface TemplateEquipment {
	configSchemasId?: Uuid;
	configuration?: any;
	controlNumber?: string;
	createdAt?: Date;
	description?: string;
	equipmentTypeId: Uuid;
	hash?: string;
	id: Uuid;
	lifecycle?: EquipmentLifecycle;
	manufacturer?: string;
	model?: string;
	name: string;
	notes?: string;
	parentId?: Uuid;
	parentPath?: string;
	status?: string;
	uischema?: any;
	updatedAt?: Date;
	version?: string;
}

export interface TemplateEquipmentGroups {
	autoActivateHotSpares: boolean;
	createdAt?: Date;
	id: Uuid;
	numHealthyThreshold: number;
	updatedAt?: Date;
}

export interface TemplatePlatformEquipment {
	count?: number;
	createdAt?: Date;
	id: Uuid;
	templateEquipmentId: Uuid;
	templatePlatformId: Uuid;
	updatedAt?: Date;
}

export interface TemplatePlatforms {
	createdAt?: Date;
	id: Uuid;
	name: string;
	status: TemplatePlatformsStatus;
	updatedAt?: Date;
}

export interface TemplatePorts {
	bridgeable?: boolean;
	configSchemasId?: Uuid;
	connectedToId?: string;
	count: number;
	description?: string;
	discrete?: boolean;
	id: Uuid;
	label: string;
	name: string;
	portDirection: PortDirectionType;
	portTypeId: Uuid;
	required: boolean;
	templateEquipmentId?: Uuid;
	uischema?: any;
}
