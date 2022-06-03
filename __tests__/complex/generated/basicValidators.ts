import { generateValidators } from '../helpers';
import {
	IAnalyticsExpanded,
	IBlockPort,
	IBlockPortExpanded,
	IBlocksViewExpanded,
	IEquipment,
	IEquipmentExpanded,
	IEquipmentImageMeta,
	IEquipmentPort,
	IEquipmentPortExpanded,
	IEquipmentStatusUpdatedEvent,
	IEquipmentTreeStatusUpdateEvent,
	IEqupimentMetricConfiguration,
	IFFTResultEntry,
	IFlowExpanded,
	IFlowgraph,
	IFlowgraphBlock,
	IFlowgraphConnection,
	IJSONSchema7,
	IMessage,
	IMetricQueryParameterExpanded,
	IMetricRanges,
	IMetricTemplateExpanded,
	INewAnalyticsExpanded,
	INewBlockPort,
	INewBlockPortExpanded,
	INewBlocksViewExpanded,
	INewEquipment,
	INewEquipmentExpanded,
	INewEquipmentPartial,
	INewEquipmentPort,
	INewEquipmentPortExpanded,
	INewEqupimentMetricConfiguration,
	INewEqupimentMetricConfigurationPartial,
	INewFlowExpanded,
	INewMetricQueryParameterExpanded,
	INewMetricRanges,
	INewMetricRangesPartial,
	INewMetricTemplateExpanded,
	INewPortExpanded,
	INewSchema,
	INewSchemaPartial,
	INewSurveyResultExpanded,
	INewTemplateEquipment,
	INewTemplateEquipmentExpanded,
	INewTemplateEquipmentPartial,
	INewTemplateEquipmentPort,
	INewTemplateEquipmentPortExpanded,
	INewTemplatePlatformExpanded,
	INewTemplatePortExpanded,
	IPlatformConfiguration,
	IPlatformsView,
	IPortExpanded,
	ISchema,
	ISurveyResultExpanded,
	ITemplateEquipment,
	ITemplateEquipmentExpanded,
	ITemplateEquipmentExpandedCount,
	ITemplateEquipmentPort,
	ITemplateEquipmentPortExpanded,
	ITemplatePlatformEquipmentWithCount,
	ITemplatePlatformExpanded,
	ITemplatePortExpanded,
	IUiSchemaNoReact,
	IUpdateExpandedEquipment,
	IUpdateTemplateExpandedEquipment,
} from './../types';
import {
	IAlert,
	IAnalytics,
	IBlock,
	IBlocksView,
	IDataType,
	IDriverBlock,
	IEquipmentGroup,
	IEquipmentGroupsView,
	IEquipmentImage,
	IEquipmentType,
	IFlow,
	IMetricQueryParameter,
	IMetricSource,
	IMetricTemplate,
	IMetricTemplateToQuery,
	INewAlert,
	INewAlertPartial,
	INewAnalytics,
	INewAnalyticsPartial,
	INewBlock,
	INewBlockPartial,
	INewBlocksView,
	INewBlocksViewPartial,
	INewDataType,
	INewDataTypePartial,
	INewDriverBlock,
	INewDriverBlockPartial,
	INewEquipmentGroup,
	INewEquipmentGroupPartial,
	INewEquipmentGroupsView,
	INewEquipmentGroupsViewPartial,
	INewEquipmentImage,
	INewEquipmentImagePartial,
	INewEquipmentType,
	INewEquipmentTypePartial,
	INewFlow,
	INewFlowPartial,
	INewMetricQueryParameter,
	INewMetricQueryParameterPartial,
	INewMetricSource,
	INewMetricSourcePartial,
	INewMetricTemplate,
	INewMetricTemplatePartial,
	INewMetricTemplateToQuery,
	INewMetricTemplateToQueryPartial,
	INewNotification,
	INewNotificationPartial,
	INewPlatform,
	INewPlatformPartial,
	INewPlatformsView,
	INewPlatformsViewPartial,
	INewPort,
	INewPortPartial,
	INewPortType,
	INewPortTypePartial,
	INewScheduledAction,
	INewScheduledActionPartial,
	INewSubscription,
	INewSubscriptionPartial,
	INewSubsToNotification,
	INewSubsToNotificationPartial,
	INewSurveyResult,
	INewSurveyResultPartial,
	INewTemplateEquipmentGroup,
	INewTemplateEquipmentGroupPartial,
	INewTemplatePlatform,
	INewTemplatePlatformEquipment,
	INewTemplatePlatformEquipmentPartial,
	INewTemplatePlatformPartial,
	INewTemplatePort,
	INewTemplatePortPartial,
	INotification,
	IPlatform,
	IPort,
	IPortType,
	IScheduledAction,
	ISubscription,
	ISubsToNotification,
	ISurveyResult,
	ITemplateEquipmentGroup,
	ITemplatePlatform,
	ITemplatePlatformEquipment,
	ITemplatePort,
} from './basicTypes';

export const AlertValidators = {
	validator: generateValidators<IAlert, INewAlert>('IAlert', 'INewAlert'),
	validatorsForPartial: generateValidators<INewAlertPartial, INewAlertPartial>('INewAlertPartial', 'INewAlertPartial'),
};

export const AnalyticsValidators = {
	validator: generateValidators<IAnalytics, INewAnalytics>('IAnalytics', 'INewAnalytics'),
	validatorsForPartial: generateValidators<INewAnalyticsPartial, INewAnalyticsPartial>('INewAnalyticsPartial', 'INewAnalyticsPartial'),
	validatorsForExpanded: generateValidators<IAnalyticsExpanded, INewAnalyticsExpanded>('IAnalyticsExpanded', 'INewAnalyticsExpanded'),
};

export const BlockValidators = {
	validator: generateValidators<IBlock, INewBlock>('IBlock', 'INewBlock'),
	validatorsForPartial: generateValidators<INewBlockPartial, INewBlockPartial>('INewBlockPartial', 'INewBlockPartial'),
};

export const BlocksViewValidators = {
	validator: generateValidators<IBlocksView, INewBlocksView>('IBlocksView', 'INewBlocksView'),
	validatorsForPartial: generateValidators<INewBlocksViewPartial, INewBlocksViewPartial>('INewBlocksViewPartial', 'INewBlocksViewPartial'),
	validatorsForExpanded: generateValidators<IBlocksViewExpanded, INewBlocksViewExpanded>('IBlocksViewExpanded', 'INewBlocksViewExpanded'),
};

export const DataTypeValidators = {
	validator: generateValidators<IDataType, INewDataType>('IDataType', 'INewDataType'),
	validatorsForPartial: generateValidators<INewDataTypePartial, INewDataTypePartial>('INewDataTypePartial', 'INewDataTypePartial'),
};

export const DriverBlockValidators = {
	validator: generateValidators<IDriverBlock, INewDriverBlock>('IDriverBlock', 'INewDriverBlock'),
	validatorsForPartial: generateValidators<INewDriverBlockPartial, INewDriverBlockPartial>('INewDriverBlockPartial', 'INewDriverBlockPartial'),
};

export const EquipmentValidators = {
	validator: generateValidators<IEquipment, INewEquipment>('IEquipment', 'INewEquipment'),
	validatorsForPartial: generateValidators<INewEquipmentPartial, INewEquipmentPartial>('INewEquipmentPartial', 'INewEquipmentPartial'),
	validatorsForExpanded: generateValidators<IEquipmentExpanded, INewEquipmentExpanded>('IEquipmentExpanded', 'INewEquipmentExpanded'),
	validatorsForUpdate: generateValidators<IUpdateExpandedEquipment, INewEquipment>('IUpdateExpandedEquipment', 'INewEquipment'),
};

export const EquipmentGroupValidators = {
	validator: generateValidators<IEquipmentGroup, INewEquipmentGroup>('IEquipmentGroup', 'INewEquipmentGroup'),
	validatorsForPartial: generateValidators<INewEquipmentGroupPartial, INewEquipmentGroupPartial>('INewEquipmentGroupPartial', 'INewEquipmentGroupPartial'),
};

export const EquipmentGroupsViewValidators = {
	validator: generateValidators<IEquipmentGroupsView, INewEquipmentGroupsView>('IEquipmentGroupsView', 'INewEquipmentGroupsView'),
	validatorsForPartial: generateValidators<INewEquipmentGroupsViewPartial, INewEquipmentGroupsViewPartial>('INewEquipmentGroupsViewPartial', 'INewEquipmentGroupsViewPartial'),
};

export const EquipmentImageValidators = {
	validator: generateValidators<IEquipmentImage, INewEquipmentImage>('IEquipmentImage', 'INewEquipmentImage'),
	validatorsForPartial: generateValidators<INewEquipmentImagePartial, INewEquipmentImagePartial>('INewEquipmentImagePartial', 'INewEquipmentImagePartial'),
};

export const EquipmentTypeValidators = {
	validator: generateValidators<IEquipmentType, INewEquipmentType>('IEquipmentType', 'INewEquipmentType'),
	validatorsForPartial: generateValidators<INewEquipmentTypePartial, INewEquipmentTypePartial>('INewEquipmentTypePartial', 'INewEquipmentTypePartial'),
};

export const FlowValidators = {
	validator: generateValidators<IFlow, INewFlow>('IFlow', 'INewFlow'),
	validatorsForPartial: generateValidators<INewFlowPartial, INewFlowPartial>('INewFlowPartial', 'INewFlowPartial'),
	validatorsForExpanded: generateValidators<IFlowExpanded, INewFlowExpanded>('IFlowExpanded', 'INewFlowExpanded'),
};

export const MetricQueryParameterValidators = {
	validator: generateValidators<IMetricQueryParameter, INewMetricQueryParameter>('IMetricQueryParameter', 'INewMetricQueryParameter'),
	validatorsForPartial: generateValidators<INewMetricQueryParameterPartial, INewMetricQueryParameterPartial>(
		'INewMetricQueryParameterPartial',
		'INewMetricQueryParameterPartial',
	),
	validatorsForExpanded: generateValidators<IMetricQueryParameterExpanded, INewMetricQueryParameterExpanded>('IMetricQueryParameterExpanded', 'INewMetricQueryParameterExpanded'),
};

export const MetricSourceValidators = {
	validator: generateValidators<IMetricSource, INewMetricSource>('IMetricSource', 'INewMetricSource'),
	validatorsForPartial: generateValidators<INewMetricSourcePartial, INewMetricSourcePartial>('INewMetricSourcePartial', 'INewMetricSourcePartial'),
};

export const MetricTemplateToQueryValidators = {
	validator: generateValidators<IMetricTemplateToQuery, INewMetricTemplateToQuery>('IMetricTemplateToQuery', 'INewMetricTemplateToQuery'),
	validatorsForPartial: generateValidators<INewMetricTemplateToQueryPartial, INewMetricTemplateToQueryPartial>(
		'INewMetricTemplateToQueryPartial',
		'INewMetricTemplateToQueryPartial',
	),
};

export const MetricTemplateValidators = {
	validator: generateValidators<IMetricTemplate, INewMetricTemplate>('IMetricTemplate', 'INewMetricTemplate'),
	validatorsForPartial: generateValidators<INewMetricTemplatePartial, INewMetricTemplatePartial>('INewMetricTemplatePartial', 'INewMetricTemplatePartial'),
	validatorsForExpanded: generateValidators<IMetricTemplateExpanded, INewMetricTemplateExpanded>('IMetricTemplateExpanded', 'INewMetricTemplateExpanded'),
};

export const NotificationValidators = {
	validator: generateValidators<INotification, INewNotification>('INotification', 'INewNotification'),
	validatorsForPartial: generateValidators<INewNotificationPartial, INewNotificationPartial>('INewNotificationPartial', 'INewNotificationPartial'),
};

export const PlatformValidators = {
	validator: generateValidators<IPlatform, INewPlatform>('IPlatform', 'INewPlatform'),
	validatorsForPartial: generateValidators<INewPlatformPartial, INewPlatformPartial>('INewPlatformPartial', 'INewPlatformPartial'),
};

export const PlatformsViewValidators = {
	validator: generateValidators<IPlatformsView, INewPlatformsView>('IPlatformsView', 'INewPlatformsView'),
	validatorsForPartial: generateValidators<INewPlatformsViewPartial, INewPlatformsViewPartial>('INewPlatformsViewPartial', 'INewPlatformsViewPartial'),
};

export const PortTypeValidators = {
	validator: generateValidators<IPortType, INewPortType>('IPortType', 'INewPortType'),
	validatorsForPartial: generateValidators<INewPortTypePartial, INewPortTypePartial>('INewPortTypePartial', 'INewPortTypePartial'),
};

export const PortValidators = {
	validator: generateValidators<IPort, INewPort>('IPort', 'INewPort'),
	validatorsForPartial: generateValidators<INewPortPartial, INewPortPartial>('INewPortPartial', 'INewPortPartial'),
	validatorsForExpanded: generateValidators<IPortExpanded, INewPortExpanded>('IPortExpanded', 'INewPortExpanded'),
};

export const ScheduledActionValidators = {
	validator: generateValidators<IScheduledAction, INewScheduledAction>('IScheduledAction', 'INewScheduledAction'),
	validatorsForPartial: generateValidators<INewScheduledActionPartial, INewScheduledActionPartial>('INewScheduledActionPartial', 'INewScheduledActionPartial'),
};

export const SchemaValidators = {
	validator: generateValidators<ISchema, INewSchema>('ISchema', 'INewSchema'),
	validatorsForPartial: generateValidators<INewSchemaPartial, INewSchemaPartial>('INewSchemaPartial', 'INewSchemaPartial'),
};

export const SubsToNotificationValidators = {
	validator: generateValidators<ISubsToNotification, INewSubsToNotification>('ISubsToNotification', 'INewSubsToNotification'),
	validatorsForPartial: generateValidators<INewSubsToNotificationPartial, INewSubsToNotificationPartial>('INewSubsToNotificationPartial', 'INewSubsToNotificationPartial'),
};

export const SubscriptionValidators = {
	validator: generateValidators<ISubscription, INewSubscription>('ISubscription', 'INewSubscription'),
	validatorsForPartial: generateValidators<INewSubscriptionPartial, INewSubscriptionPartial>('INewSubscriptionPartial', 'INewSubscriptionPartial'),
};

export const SurveyResultValidators = {
	validator: generateValidators<ISurveyResult, INewSurveyResult>('ISurveyResult', 'INewSurveyResult'),
	validatorsForPartial: generateValidators<INewSurveyResultPartial, INewSurveyResultPartial>('INewSurveyResultPartial', 'INewSurveyResultPartial'),
	validatorsForExpanded: generateValidators<ISurveyResultExpanded, INewSurveyResultExpanded>('ISurveyResultExpanded', 'INewSurveyResultExpanded'),
};

export const TemplateEquipmentValidators = {
	validator: generateValidators<ITemplateEquipment, INewTemplateEquipment>('ITemplateEquipment', 'INewTemplateEquipment'),
	validatorsForPartial: generateValidators<INewTemplateEquipmentPartial, INewTemplateEquipmentPartial>('INewTemplateEquipmentPartial', 'INewTemplateEquipmentPartial'),
	validatorsForExpanded: generateValidators<ITemplateEquipmentExpanded, INewTemplateEquipmentExpanded>('ITemplateEquipmentExpanded', 'INewTemplateEquipmentExpanded'),
};

export const TemplateEquipmentGroupValidators = {
	validator: generateValidators<ITemplateEquipmentGroup, INewTemplateEquipmentGroup>('ITemplateEquipmentGroup', 'INewTemplateEquipmentGroup'),
	validatorsForPartial: generateValidators<INewTemplateEquipmentGroupPartial, INewTemplateEquipmentGroupPartial>(
		'INewTemplateEquipmentGroupPartial',
		'INewTemplateEquipmentGroupPartial',
	),
};

export const TemplatePlatformEquipmentValidators = {
	validator: generateValidators<ITemplatePlatformEquipment, INewTemplatePlatformEquipment>('ITemplatePlatformEquipment', 'INewTemplatePlatformEquipment'),
	validatorsForPartial: generateValidators<INewTemplatePlatformEquipmentPartial, INewTemplatePlatformEquipmentPartial>(
		'INewTemplatePlatformEquipmentPartial',
		'INewTemplatePlatformEquipmentPartial',
	),
};

export const TemplatePlatformValidators = {
	validator: generateValidators<ITemplatePlatform, INewTemplatePlatform>('ITemplatePlatform', 'INewTemplatePlatform'),
	validatorsForPartial: generateValidators<INewTemplatePlatformPartial, INewTemplatePlatformPartial>('INewTemplatePlatformPartial', 'INewTemplatePlatformPartial'),
	validatorsForExpanded: generateValidators<ITemplatePlatformExpanded, INewTemplatePlatformExpanded>('ITemplatePlatformExpanded', 'INewTemplatePlatformExpanded'),
};

export const TemplatePortValidators = {
	validator: generateValidators<ITemplatePort, INewTemplatePort>('ITemplatePort', 'INewTemplatePort'),
	validatorsForPartial: generateValidators<INewTemplatePortPartial, INewTemplatePortPartial>('INewTemplatePortPartial', 'INewTemplatePortPartial'),
	validatorsForExpanded: generateValidators<ITemplatePortExpanded, INewTemplatePortExpanded>('ITemplatePortExpanded', 'INewTemplatePortExpanded'),
};

export const JSONSchema7Validators = {
	validator: generateValidators<IJSONSchema7, IJSONSchema7>('IJSONSchema7', 'IJSONSchema7'),
};

export const UiSchemaNoReactValidators = {
	validator: generateValidators<IUiSchemaNoReact, IUiSchemaNoReact>('IUiSchemaNoReact', 'IUiSchemaNoReact'),
};

export const MetricRangesValidators = {
	validator: generateValidators<IMetricRanges, INewMetricRanges>('IMetricRanges', 'INewMetricRanges'),
	validatorsForPartial: generateValidators<INewMetricRangesPartial, INewMetricRangesPartial>('INewMetricRangesPartial', 'INewMetricRangesPartial'),
};

export const EqupimentMetricConfigurationValidators = {
	validator: generateValidators<IEqupimentMetricConfiguration, INewEqupimentMetricConfiguration>('IEqupimentMetricConfiguration', 'INewEqupimentMetricConfiguration'),
	validatorsForPartial: generateValidators<INewEqupimentMetricConfigurationPartial, INewEqupimentMetricConfigurationPartial>(
		'INewEqupimentMetricConfigurationPartial',
		'INewEqupimentMetricConfigurationPartial',
	),
};

export const TemplatePlatformEquipmentWithCountValidators = {
	validator: generateValidators<ITemplatePlatformEquipmentWithCount, ITemplatePlatformEquipmentWithCount>(
		'ITemplatePlatformEquipmentWithCount',
		'ITemplatePlatformEquipmentWithCount',
	),
};

export const TemplateEquipmentExpandedCountValidators = {
	validator: generateValidators<ITemplateEquipmentExpandedCount, ITemplateEquipmentExpandedCount>('ITemplateEquipmentExpandedCount', 'ITemplateEquipmentExpandedCount'),
};

export const EquipmentPortValidators = {
	validator: generateValidators<IEquipmentPort, INewEquipmentPort>('IEquipmentPort', 'INewEquipmentPort'),
	validatorsForExpanded: generateValidators<IEquipmentPortExpanded, INewEquipmentPortExpanded>('IEquipmentPortExpanded', 'INewEquipmentPortExpanded'),
};

export const BlockPortValidators = {
	validator: generateValidators<IBlockPort, INewBlockPort>('IBlockPort', 'INewBlockPort'),
	validatorsForExpanded: generateValidators<IBlockPortExpanded, INewBlockPortExpanded>('IBlockPortExpanded', 'INewBlockPortExpanded'),
};

export const UpdateExpandedEquipmentValidators = {
	validator: generateValidators<IUpdateExpandedEquipment, IUpdateExpandedEquipment>('IUpdateExpandedEquipment', 'IUpdateExpandedEquipment'),
};

export const TemplateEquipmentPortValidators = {
	validator: generateValidators<ITemplateEquipmentPort, INewTemplateEquipmentPort>('ITemplateEquipmentPort', 'INewTemplateEquipmentPort'),
	validatorsForExpanded: generateValidators<ITemplateEquipmentPortExpanded, INewTemplateEquipmentPortExpanded>(
		'ITemplateEquipmentPortExpanded',
		'INewTemplateEquipmentPortExpanded',
	),
};

export const UpdateTemplateExpandedEquipmentValidators = {
	validator: generateValidators<IUpdateTemplateExpandedEquipment, IUpdateTemplateExpandedEquipment>('IUpdateTemplateExpandedEquipment', 'IUpdateTemplateExpandedEquipment'),
};

export const MessageValidators = {
	validator: generateValidators<IMessage, IMessage>('IMessage', 'IMessage'),
};

export const EquipmentImageMetaValidators = {
	validator: generateValidators<IEquipmentImageMeta, IEquipmentImageMeta>('IEquipmentImageMeta', 'IEquipmentImageMeta'),
};

export const EquipmentTreeStatusUpdateEventValidators = {
	validator: generateValidators<IEquipmentTreeStatusUpdateEvent, IEquipmentTreeStatusUpdateEvent>('IEquipmentTreeStatusUpdateEvent', 'IEquipmentTreeStatusUpdateEvent'),
};

export const PlatformConfigurationValidators = {
	validator: generateValidators<IPlatformConfiguration, IPlatformConfiguration>('IPlatformConfiguration', 'IPlatformConfiguration'),
};

export const EquipmentStatusUpdatedEventValidators = {
	validator: generateValidators<IEquipmentStatusUpdatedEvent, IEquipmentStatusUpdatedEvent>('IEquipmentStatusUpdatedEvent', 'IEquipmentStatusUpdatedEvent'),
};

export const FlowgraphBlockValidators = {
	validator: generateValidators<IFlowgraphBlock, IFlowgraphBlock>('IFlowgraphBlock', 'IFlowgraphBlock'),
};

export const FlowgraphConnectionValidators = {
	validator: generateValidators<IFlowgraphConnection, IFlowgraphConnection>('IFlowgraphConnection', 'IFlowgraphConnection'),
};

export const FlowgraphValidators = {
	validator: generateValidators<IFlowgraph, IFlowgraph>('IFlowgraph', 'IFlowgraph'),
};

export const FFTResultEntryValidators = {
	validator: generateValidators<IFFTResultEntry, IFFTResultEntry>('IFFTResultEntry', 'IFFTResultEntry'),
};
