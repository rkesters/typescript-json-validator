import {
	Alerts,
	Analytics,
	Blocks,
	BlocksView,
	DataTypes,
	DriverBlocks,
	Equipment,
	EquipmentGroups,
	EquipmentGroupsView,
	EquipmentImages,
	EquipmentTypes,
	Flows,
	MetricQueryParameters,
	MetricSources,
	MetricTemplates,
	MetricTemplateToQuery,
	Notifications,
	Platforms,
	PlatformsView,
	Ports,
	PortTypes,
	ScheduledActions,
	Schemas,
	Subscriptions,
	SubsToNotifications,
	SurveyResults,
	TemplateEquipment,
	TemplateEquipmentGroups,
	TemplatePlatformEquipment,
	TemplatePlatforms,
	TemplatePorts,
} from './schema_types';
export { AlertType, AnalyticsState, BlockType, EquipmentLifecycle, EquipmentStatus, PlatformType, PortDirectionType, PortTypeKind, TemplatePlatformsStatus } from './schema_types';
export type IAlert = Alerts;
export type INewAlert = Omit<IAlert, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewAlertPartial = Partial<INewAlert>;

export type IAnalytics = Analytics;
export type INewAnalytics = Omit<IAnalytics, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewAnalyticsPartial = Partial<INewAnalytics>;

export type IBlock = Blocks;
export type INewBlock = Omit<IBlock, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewBlockPartial = Partial<INewBlock>;

export type IBlocksView = BlocksView;
export type INewBlocksView = Omit<IBlocksView, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewBlocksViewPartial = Partial<INewBlocksView>;

export type IDataType = DataTypes;
export type INewDataType = Omit<IDataType, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewDataTypePartial = Partial<INewDataType>;

export type IDriverBlock = DriverBlocks;
export type INewDriverBlock = Omit<IDriverBlock, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewDriverBlockPartial = Partial<INewDriverBlock>;

export type IEquipment = Equipment;
export type INewEquipment = Omit<IEquipment, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewEquipmentPartial = Partial<INewEquipment>;

export type IEquipmentGroup = EquipmentGroups;
export type INewEquipmentGroup = Omit<IEquipmentGroup, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewEquipmentGroupPartial = Partial<INewEquipmentGroup>;

export type IEquipmentGroupsView = EquipmentGroupsView;
export type INewEquipmentGroupsView = Omit<IEquipmentGroupsView, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewEquipmentGroupsViewPartial = Partial<INewEquipmentGroupsView>;

export type IEquipmentImage = EquipmentImages;
export type INewEquipmentImage = Omit<IEquipmentImage, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewEquipmentImagePartial = Partial<INewEquipmentImage>;

export type IEquipmentType = EquipmentTypes;
export type INewEquipmentType = Omit<IEquipmentType, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewEquipmentTypePartial = Partial<INewEquipmentType>;

export type IFlow = Flows;
export type INewFlow = Omit<IFlow, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewFlowPartial = Partial<INewFlow>;

export type IMetricQueryParameter = MetricQueryParameters;
export type INewMetricQueryParameter = Omit<IMetricQueryParameter, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewMetricQueryParameterPartial = Partial<INewMetricQueryParameter>;

export type IMetricSource = MetricSources;
export type INewMetricSource = Omit<IMetricSource, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewMetricSourcePartial = Partial<INewMetricSource>;

export type IMetricTemplateToQuery = MetricTemplateToQuery;
export type INewMetricTemplateToQuery = Omit<IMetricTemplateToQuery, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewMetricTemplateToQueryPartial = Partial<INewMetricTemplateToQuery>;

export type IMetricTemplate = MetricTemplates;
export type INewMetricTemplate = Omit<IMetricTemplate, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewMetricTemplatePartial = Partial<INewMetricTemplate>;

export type INotification = Notifications;
export type INewNotification = Omit<INotification, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewNotificationPartial = Partial<INewNotification>;

export type IPlatform = Platforms;
export type INewPlatform = Omit<IPlatform, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewPlatformPartial = Partial<INewPlatform>;

export type IPlatformsView = PlatformsView;
export type INewPlatformsView = Omit<IPlatformsView, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewPlatformsViewPartial = Partial<INewPlatformsView>;

export type IPortType = PortTypes;
export type INewPortType = Omit<IPortType, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewPortTypePartial = Partial<INewPortType>;

export type IPort = Ports;
export type INewPort = Omit<IPort, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewPortPartial = Partial<INewPort>;

export type IScheduledAction = ScheduledActions;
export type INewScheduledAction = Omit<IScheduledAction, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewScheduledActionPartial = Partial<INewScheduledAction>;

export type ISchema = Schemas;
export type INewSchema = Omit<ISchema, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewSchemaPartial = Partial<INewSchema>;

export type ISubsToNotification = SubsToNotifications;
export type INewSubsToNotification = Omit<ISubsToNotification, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewSubsToNotificationPartial = Partial<INewSubsToNotification>;

export type ISubscription = Subscriptions;
export type INewSubscription = Omit<ISubscription, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewSubscriptionPartial = Partial<INewSubscription>;

export type ISurveyResult = SurveyResults;
export type INewSurveyResult = Omit<ISurveyResult, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewSurveyResultPartial = Partial<INewSurveyResult>;

export type ITemplateEquipment = TemplateEquipment;
export type INewTemplateEquipment = Omit<ITemplateEquipment, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewTemplateEquipmentPartial = Partial<INewTemplateEquipment>;

export type ITemplateEquipmentGroup = TemplateEquipmentGroups;
export type INewTemplateEquipmentGroup = Omit<ITemplateEquipmentGroup, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewTemplateEquipmentGroupPartial = Partial<INewTemplateEquipmentGroup>;

export type ITemplatePlatformEquipment = TemplatePlatformEquipment;
export type INewTemplatePlatformEquipment = Omit<ITemplatePlatformEquipment, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewTemplatePlatformEquipmentPartial = Partial<INewTemplatePlatformEquipment>;

export type ITemplatePlatform = TemplatePlatforms;
export type INewTemplatePlatform = Omit<ITemplatePlatform, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewTemplatePlatformPartial = Partial<INewTemplatePlatform>;

export type ITemplatePort = TemplatePorts;
export type INewTemplatePort = Omit<ITemplatePort, 'id' | 'createdAt' | 'updatedAt' | 'hash'>;
export type INewTemplatePortPartial = Partial<INewTemplatePort>;
