using { cuid } from '@sap/cds/common';

@path: '/console'
service ConsoleService {
  action logMessage(input : String) returns String;
}
