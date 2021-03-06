/*-----------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat, Inc. All rights reserved.
 *  Licensed under the MIT License. See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------------*/

import { Uri, workspace } from 'vscode';

const EXTENSION_CONFIG_KEY = 'vs-knative';

export const enum Kind {
  LocalConfig,
}

export enum ServingContextType {
  NONE = 'none',
  REVISION = 'revision',
  REVISION_TAGGED = 'revision_tagged',
  SERVICE = 'service',
  SERVICE_MODIFIED = 'service_modified',
  LOGIN_REQUIRED = 'login_required',
}

export enum EventingContextType {
  NONE = 'none',
  BROKER = 'broker',
  CHANNEL = 'channel',
  SOURCE = 'source',
  SOURCE_APISERVER = 'source_apiserver',
  SOURCE_BINDING = 'source_binding',
  SOURCE_PING = 'source_ping',
  SUBSCRIPTION = 'subscription',
  TRIGGER = 'trigger',
}

export enum ComponentType {
  LOCAL = 'local',
  GIT = 'git',
  BINARY = 'binary',
}

export const enum SourceType {
  GIT = 'git',
  LOCAL = 'local',
  BINARY = 'binary',
}

export interface Config {
  kind: Kind;
  apiversion: string;
  ComponentSettings: ComponentSettings;
}

export interface ComponentSettings {
  Type: string;
  SourceLocation: string;
  Ref: string;
  SourceType: SourceType;
  Application: string;
  Project: string;
  Name: string;
  ContextPath?: Uri;
  Ports: string[];
}

export function getOutputFormat(): string {
  return workspace.getConfiguration(EXTENSION_CONFIG_KEY)['vs-knative.outputFormat'];
}
