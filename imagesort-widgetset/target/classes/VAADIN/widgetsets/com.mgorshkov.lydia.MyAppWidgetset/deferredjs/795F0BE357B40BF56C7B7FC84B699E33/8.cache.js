$wnd.com_mgorshkov_lydia_MyAppWidgetset.runAsyncCallback8("com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(201, 20, {39:1, 36:1, 14:1, 21:1, 20:1, 10:1, 6:1, 16:1, 1:1});\n_.getCellForEvent__Lcom_google_gwt_event_dom_client_ClickEvent_2Lcom_google_gwt_user_client_ui_HTMLTable$Cell_2 = function com_google_gwt_user_client_ui_HTMLTable_getCellForEvent__Lcom_google_gwt_event_dom_client_ClickEvent_2Lcom_google_gwt_user_client_ui_HTMLTable$Cell_2(event_0){\n  var column, row, td;\n  td = this.getEventTargetCell__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2(cgguc.com_google_gwt_user_client_Event_as__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_user_client_Event_2(event_0.getNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2()));\n  if (com_google_gwt_lang_Cast_isNull__Ljava_lang_Object_2Z(td)) {\n    return null;\n  }\n  row = cggdc.com_google_gwt_dom_client_TableRowElement_$getSectionRowIndex__Lcom_google_gwt_dom_client_TableRowElement_2I(cggdc.com_google_gwt_dom_client_TableRowElement_as__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_TableRowElement_2(cggdc.com_google_gwt_dom_client_Node_$getParentElement__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(td)));\n  column = cggdc.com_google_gwt_dom_client_TableCellElement_$getCellIndex__Lcom_google_gwt_dom_client_TableCellElement_2I(cggdc.com_google_gwt_dom_client_TableCellElement_as__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_TableCellElement_2(td));\n  return new cggucu.com_google_gwt_user_client_ui_HTMLTable$Cell_HTMLTable$Cell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV(this, row, column);\n}\n;\n_.getEventTargetCell__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_HTMLTable_getEventTargetCell__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2(event_0){\n  var body_0, td, tr;\n  td = cgguc.com_google_gwt_user_client_DOM_eventGetTarget__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2(event_0);\n  for (; com_google_gwt_lang_Cast_isNotNull__Ljava_lang_Object_2Z(td); td = cgguc.com_google_gwt_user_client_DOM_getParent__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_Element_2(td)) {\n    if (jl.java_lang_String_equalsIgnoreCase_1Ljava_1lang_1String_1_1Z_1_1devirtual$__Ljava_lang_String_2Ljava_lang_String_2Z(cggdc.com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(td, 'tagName'), 'td')) {\n      tr = cgguc.com_google_gwt_user_client_DOM_getParent__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_Element_2(td);\n      body_0 = cgguc.com_google_gwt_user_client_DOM_getParent__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_Element_2(tr);\n      if (com_google_gwt_lang_Cast_jsEquals__Ljava_lang_Object_2Ljava_lang_Object_2Z(body_0, this.com_google_gwt_user_client_ui_HTMLTable_bodyElem)) {\n        return cgguc.com_google_gwt_user_client_DOM_asOld__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_Element_2(td);\n      }\n    }\n    if (com_google_gwt_lang_Cast_jsEquals__Ljava_lang_Object_2Ljava_lang_Object_2Z(td, this.com_google_gwt_user_client_ui_HTMLTable_bodyElem)) {\n      return null;\n    }\n  }\n  return null;\n}\n;\ncom_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1824, 1, {1:1}, cggucu.com_google_gwt_user_client_ui_HTMLTable$Cell_HTMLTable$Cell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV);\n_.private$com_google_gwt_user_client_ui_HTMLTable$Cell$$init__V = function com_google_gwt_user_client_ui_HTMLTable$Cell_$init__V(){\n}\n;\n_.getCellIndex__I = function com_google_gwt_user_client_ui_HTMLTable$Cell_getCellIndex__I(){\n  return this.com_google_gwt_user_client_ui_HTMLTable$Cell_cellIndex;\n}\n;\n_.getRowIndex__I = function com_google_gwt_user_client_ui_HTMLTable$Cell_getRowIndex__I(){\n  return this.com_google_gwt_user_client_ui_HTMLTable$Cell_rowIndex;\n}\n;\ncom_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1566, 1, {74:1, 723:1, 3:1, 1:1});\n_.refresh__V = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$1$1$238$1_refresh__V(){\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$1$1$238$1_val$handler2.invoke__Ljava_lang_Object_2Lcom_vaadin_client_metadata_Method_2_3Ljava_lang_Object_2Ljava_lang_Object_2(this, cvcm.com_vaadin_client_metadata_TypeData_getType__Ljava_lang_Class_2Lcom_vaadin_client_metadata_Type_2(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridServerRpc_12_1classLit).getMethod__Ljava_lang_String_2Lcom_vaadin_client_metadata_Method_2('refresh'), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(cggl.com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, 1), {3:1, 1:1, 5:1}, 1, 3, []));\n}\n;\n_.select__IIV = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$1$1$238$1_select__IIV(p0, p1){\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$1$1$238$1_val$handler2.invoke__Ljava_lang_Object_2Lcom_vaadin_client_metadata_Method_2_3Ljava_lang_Object_2Ljava_lang_Object_2(this, cvcm.com_vaadin_client_metadata_TypeData_getType__Ljava_lang_Class_2Lcom_vaadin_client_metadata_Type_2(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridServerRpc_12_1classLit).getMethod__Ljava_lang_String_2Lcom_vaadin_client_metadata_Method_2('select'), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(cggl.com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, 1), {3:1, 1:1, 5:1}, 1, 3, [jl.java_lang_Integer_valueOf__ILjava_lang_Integer_2(p0), jl.java_lang_Integer_valueOf__ILjava_lang_Integer_2(p1)]));\n}\n;\ncom_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1675, 1, {159:1, 1:1});\n_.private$com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$load__V = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_load__V(){\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setSuperClass__Ljava_lang_Class_2Ljava_lang_Class_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1AbstractComponentState_12_1classLit);\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setClass__Ljava_lang_String_2Ljava_lang_Class_2V('com.vaadin.ui.components.colorpicker.ColorPickerGrid', cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1client_1ui_1colorpicker_1ColorPickerGridConnector_12_1classLit);\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setConstructor__Ljava_lang_Class_2Lcom_vaadin_client_metadata_Invoker_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1client_1ui_1colorpicker_1ColorPickerGridConnector_12_1classLit, new cvcm.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$1_ConnectorBundleLoaderImpl$8$1$1__Lcom_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_2V(this));\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setConstructor__Ljava_lang_Class_2Lcom_vaadin_client_metadata_Invoker_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, new cvcm.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$2_ConnectorBundleLoaderImpl$8$1$2__Lcom_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_2V(this));\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setReturnType__Ljava_lang_Class_2Ljava_lang_String_2Lcom_vaadin_client_metadata_Type_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1client_1ui_1colorpicker_1ColorPickerGridConnector_12_1classLit, 'getState', new cvcm.com_vaadin_client_metadata_Type_Type__Ljava_lang_Class_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit));\n  this.private$com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$loadJsBundle__Lcom_vaadin_client_metadata_TypeDataStore_2V(this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2);\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setPropertyType__Ljava_lang_Class_2Ljava_lang_String_2Lcom_vaadin_client_metadata_Type_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'changedColor', new cvcm.com_vaadin_client_metadata_Type_Type__Ljava_lang_Class_2V(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(cggl.com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1)));\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setPropertyType__Ljava_lang_Class_2Ljava_lang_String_2Lcom_vaadin_client_metadata_Type_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'changedX', new cvcm.com_vaadin_client_metadata_Type_Type__Ljava_lang_Class_2V(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(cggl.com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1)));\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setPropertyType__Ljava_lang_Class_2Ljava_lang_String_2Lcom_vaadin_client_metadata_Type_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'changedY', new cvcm.com_vaadin_client_metadata_Type_Type__Ljava_lang_Class_2V(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(cggl.com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1)));\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setPropertyType__Ljava_lang_Class_2Ljava_lang_String_2Lcom_vaadin_client_metadata_Type_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'columnCount', new cvcm.com_vaadin_client_metadata_Type_Type__Ljava_lang_Class_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit));\n  this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_val$store2.setPropertyType__Ljava_lang_Class_2Ljava_lang_String_2Lcom_vaadin_client_metadata_Type_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'rowCount', new cvcm.com_vaadin_client_metadata_Type_Type__Ljava_lang_Class_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit));\n}\n;\n_.private$com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$loadJsBundle__Lcom_vaadin_client_metadata_TypeDataStore_2V = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_loadJsBundle__Lcom_vaadin_client_metadata_TypeDataStore_2V(store){\n  this.private$com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$loadNativeJs__Lcom_vaadin_client_metadata_TypeDataStore_2V(store);\n}\n;\n_.private$com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$loadNativeJs__Lcom_vaadin_client_metadata_TypeDataStore_2V = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_loadNativeJs__Lcom_vaadin_client_metadata_TypeDataStore_2V(store){\n  var data_0 = {setter:function(bean, value_0){\n    bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedColor = value_0;\n  }\n  , getter:function(bean){\n    return bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedColor;\n  }\n  };\n  store.setPropertyData__Ljava_lang_Class_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'changedColor', data_0);\n  var data_0 = {setter:function(bean, value_0){\n    bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedX = value_0;\n  }\n  , getter:function(bean){\n    return bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedX;\n  }\n  };\n  store.setPropertyData__Ljava_lang_Class_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'changedX', data_0);\n  var data_0 = {setter:function(bean, value_0){\n    bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedY = value_0;\n  }\n  , getter:function(bean){\n    return bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedY;\n  }\n  };\n  store.setPropertyData__Ljava_lang_Class_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'changedY', data_0);\n  var data_0 = {setter:function(bean, value_0){\n    bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_columnCount = value_0.intValue__I();\n  }\n  , getter:function(bean){\n    return jl.java_lang_Integer_valueOf__ILjava_lang_Integer_2(bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_columnCount);\n  }\n  };\n  store.setPropertyData__Ljava_lang_Class_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'columnCount', data_0);\n  var data_0 = {setter:function(bean, value_0){\n    bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_rowCount = value_0.intValue__I();\n  }\n  , getter:function(bean){\n    return jl.java_lang_Integer_valueOf__ILjava_lang_Integer_2(bean.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_rowCount);\n  }\n  };\n  store.setPropertyData__Ljava_lang_Class_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridState_12_1classLit, 'rowCount', data_0);\n}\n;\n_.onSuccess__V = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_onSuccess__V(){\n  this.private$com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$load__V();\n  cvcm.com_vaadin_client_metadata_ConnectorBundleLoader_get__Lcom_vaadin_client_metadata_ConnectorBundleLoader_2().setLoaded__Ljava_lang_String_2V(this.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_this$11.getName__Ljava_lang_String_2());\n}\n;\ncom_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1677, 1, {11:1, 1:1}, cvcm.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$1_ConnectorBundleLoaderImpl$8$1$1__Lcom_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_2V);\n_.private$com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$1$$init__V = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$1_$init__V(){\n}\n;\n_.invoke__Ljava_lang_Object_2_3Ljava_lang_Object_2Ljava_lang_Object_2 = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$1_invoke__Ljava_lang_Object_2_3Ljava_lang_Object_2Ljava_lang_Object_2(target, params){\n  return new cvcuc3.com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_ColorPickerGridConnector__V;\n}\n;\ncom_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1678, 1, {11:1, 1:1}, cvcm.com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$2_ConnectorBundleLoaderImpl$8$1$2__Lcom_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1_2V);\n_.private$com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$2$$init__V = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$2_$init__V(){\n}\n;\n_.invoke__Ljava_lang_Object_2_3Ljava_lang_Object_2Ljava_lang_Object_2 = function com_vaadin_client_metadata_ConnectorBundleLoaderImpl$8$1$2_invoke__Ljava_lang_Object_2_3Ljava_lang_Object_2Ljava_lang_Object_2(target, params){\n  return new cvsuc3.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_ColorPickerGridState__V;\n}\n;\ncom_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1676, 13, {35:1, 7:1, 15:1, 24:1, 28:1, 13:1, 18:1, 26:1, 3:1, 1:1}, cvcuc3.com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_ColorPickerGridConnector__V);\n_.private$com_vaadin_client_ui_colorpicker_ColorPickerGridConnector$$init__V = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_$init__V(){\n  this.com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_rpc = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(cvcc.com_vaadin_client_communication_RpcProxy_create__Ljava_lang_Class_2Lcom_vaadin_client_ServerConnector_2Lcom_vaadin_shared_communication_ServerRpc_2(cggl.com_google_gwt_lang_ClassLiteralHolder_Lcom_1vaadin_1shared_1ui_1colorpicker_1ColorPickerGridServerRpc_12_1classLit, this), 723);\n}\n;\n_.createWidget__Lcom_google_gwt_user_client_ui_Widget_2 = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_createWidget__Lcom_google_gwt_user_client_ui_Widget_2(){\n  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(new cvcuc3.com_vaadin_client_ui_colorpicker_VColorPickerGrid_VColorPickerGrid__V, 6);\n}\n;\n_.getState__Lcom_vaadin_shared_AbstractComponentState_2 = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_getState__Lcom_vaadin_shared_AbstractComponentState_2(){\n  return this.getState__Lcom_vaadin_shared_ui_colorpicker_ColorPickerGridState_2();\n}\n;\n_.getState__Lcom_vaadin_shared_ui_colorpicker_ColorPickerGridState_2 = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_getState__Lcom_vaadin_shared_ui_colorpicker_ColorPickerGridState_2(){\n  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_JavaClassHierarchySetupUtil_getClassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(13).getState__Lcom_vaadin_shared_AbstractComponentState_2.call(this), 622);\n}\n;\n_.getWidget__Lcom_google_gwt_user_client_ui_Widget_2 = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_getWidget__Lcom_google_gwt_user_client_ui_Widget_2(){\n  return this.getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2();\n}\n;\n_.getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2 = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2(){\n  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_JavaClassHierarchySetupUtil_getClassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(13).getWidget__Lcom_google_gwt_user_client_ui_Widget_2.call(this), 653);\n}\n;\n_.init__V = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_init__V(){\n  com_google_gwt_lang_JavaClassHierarchySetupUtil_getClassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(18).init__V.call(this);\n  this.getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2().addClickHandler__Lcom_google_gwt_event_dom_client_ClickHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this);\n}\n;\n_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){\n  this.com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_rpc.select__IIV(this.getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2().getSelectedX__I(), this.getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2().getSelectedY__I());\n}\n;\n_.onStateChanged__Lcom_vaadin_client_communication_StateChangeEvent_2V = function com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_onStateChanged__Lcom_vaadin_client_communication_StateChangeEvent_2V(stateChangeEvent){\n  com_google_gwt_lang_JavaClassHierarchySetupUtil_getClassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(13).onStateChanged__Lcom_vaadin_client_communication_StateChangeEvent_2V.call(this, stateChangeEvent);\n  if (stateChangeEvent.hasPropertyChanged__Ljava_lang_String_2Z('rowCount') || stateChangeEvent.hasPropertyChanged__Ljava_lang_String_2Z('columnCount') || stateChangeEvent.hasPropertyChanged__Ljava_lang_String_2Z('updateGrid')) {\n    this.getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2().updateGrid__IIV(this.getState__Lcom_vaadin_shared_ui_colorpicker_ColorPickerGridState_2().com_vaadin_shared_ui_colorpicker_ColorPickerGridState_rowCount, this.getState__Lcom_vaadin_shared_ui_colorpicker_ColorPickerGridState_2().com_vaadin_shared_ui_colorpicker_ColorPickerGridState_columnCount);\n  }\n  if (stateChangeEvent.hasPropertyChanged__Ljava_lang_String_2Z('changedX') || stateChangeEvent.hasPropertyChanged__Ljava_lang_String_2Z('changedY') || stateChangeEvent.hasPropertyChanged__Ljava_lang_String_2Z('changedColor') || stateChangeEvent.hasPropertyChanged__Ljava_lang_String_2Z('updateColor')) {\n    this.getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2().updateColor___3Ljava_lang_String_2_3Ljava_lang_String_2_3Ljava_lang_String_2V(this.getState__Lcom_vaadin_shared_ui_colorpicker_ColorPickerGridState_2().com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedColor, this.getState__Lcom_vaadin_shared_ui_colorpicker_ColorPickerGridState_2().com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedX, this.getState__Lcom_vaadin_shared_ui_colorpicker_ColorPickerGridState_2().com_vaadin_shared_ui_colorpicker_ColorPickerGridState_changedY);\n    if (!this.getWidget__Lcom_vaadin_client_ui_colorpicker_VColorPickerGrid_2().isGridLoaded__Z()) {\n      this.com_vaadin_client_ui_colorpicker_ColorPickerGridConnector_rpc.refresh__V();\n    }\n  }\n}\n;\ncom_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(653, 361, {35:1, 39:1, 7:1, 14:1, 21:1, 20:1, 10:1, 6:1, 653:1, 16:1, 1:1}, cvcuc3.com_vaadin_client_ui_colorpicker_VColorPickerGrid_VColorPickerGrid__V);\n_.private$com_vaadin_client_ui_colorpicker_VColorPickerGrid$$init__V = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_$init__V(){\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_rows = 1;\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_columns = 1;\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_gridLoaded = false;\n}\n;\n_.addClickHandler__Lcom_google_gwt_event_dom_client_ClickHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2 = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_addClickHandler__Lcom_google_gwt_event_dom_client_ClickHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){\n  return this.addDomHandler__Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler, cggedc.com_google_gwt_event_dom_client_ClickEvent_getType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2());\n}\n;\n_.private$com_vaadin_client_ui_colorpicker_VColorPickerGrid$createGrid__Lcom_google_gwt_user_client_ui_Grid_2 = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_createGrid__Lcom_google_gwt_user_client_ui_Grid_2(){\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_grid = new cggucu.com_google_gwt_user_client_ui_Grid_Grid__IIV(this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_rows, this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_columns);\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_grid.setWidth__Ljava_lang_String_2V('100%');\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_grid.setHeight__Ljava_lang_String_2V('100%');\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_grid.addClickHandler__Lcom_google_gwt_event_dom_client_ClickHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this);\n  return this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_grid;\n}\n;\n_.getSelectedX__I = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_getSelectedX__I(){\n  return this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_selectedX;\n}\n;\n_.getSelectedY__I = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_getSelectedY__I(){\n  return this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_selectedY;\n}\n;\n_.isGridLoaded__Z = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_isGridLoaded__Z(){\n  return this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_gridLoaded;\n}\n;\n_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){\n  var cell;\n  cell = this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_grid.getCellForEvent__Lcom_google_gwt_event_dom_client_ClickEvent_2Lcom_google_gwt_user_client_ui_HTMLTable$Cell_2(event_0);\n  if (com_google_gwt_lang_Cast_isNull__Ljava_lang_Object_2Z(cell)) {\n    return;\n  }\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_selectedY = cell.getRowIndex__I();\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_selectedX = cell.getCellIndex__I();\n}\n;\n_.updateColor___3Ljava_lang_String_2_3Ljava_lang_String_2_3Ljava_lang_String_2V = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_updateColor___3Ljava_lang_String_2_3Ljava_lang_String_2_3Ljava_lang_String_2V(changedColor, changedX, changedY){\n  var c, element;\n  if (com_google_gwt_lang_Cast_jsNotEquals__Ljava_lang_Object_2Ljava_lang_Object_2Z(changedColor, null) && com_google_gwt_lang_Cast_jsNotEquals__Ljava_lang_Object_2Ljava_lang_Object_2Z(changedX, null) && com_google_gwt_lang_Cast_jsNotEquals__Ljava_lang_Object_2Ljava_lang_Object_2Z(changedY, null)) {\n    if (changedColor.length == changedX.length && changedX.length == changedY.length) {\n      for (c = 0; c < changedColor.length; c++) {\n        element = this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_grid.getCellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2().getElement__IILcom_google_gwt_user_client_Element_2(jl.java_lang_Integer_parseInt__Ljava_lang_String_2I(changedX[c]), jl.java_lang_Integer_parseInt__Ljava_lang_String_2I(changedY[c]));\n        cggdc.com_google_gwt_dom_client_Style_$setProperty__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(cggdc.com_google_gwt_dom_client_Element_$getStyle__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Style_2(element), 'background', changedColor[c]);\n      }\n    }\n    this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_gridLoaded = true;\n  }\n}\n;\n_.updateGrid__IIV = function com_vaadin_client_ui_colorpicker_VColorPickerGrid_updateGrid__IIV(rowCount, columnCount){\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_rows = rowCount;\n  this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_columns = columnCount;\n  this.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_vaadin_client_ui_colorpicker_VColorPickerGrid_grid);\n  this.add__Lcom_google_gwt_user_client_ui_Widget_2IIV(this.private$com_vaadin_client_ui_colorpicker_VColorPickerGrid$createGrid__Lcom_google_gwt_user_client_ui_Grid_2(), 0, 0);\n}\n;\n_.com_vaadin_client_ui_colorpicker_VColorPickerGrid_columns = 0;\n_.com_vaadin_client_ui_colorpicker_VColorPickerGrid_gridLoaded = false;\n_.com_vaadin_client_ui_colorpicker_VColorPickerGrid_rows = 0;\n_.com_vaadin_client_ui_colorpicker_VColorPickerGrid_selectedX = 0;\n_.com_vaadin_client_ui_colorpicker_VColorPickerGrid_selectedY = 0;\ncom_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(622, 32, {32:1, 38:1, 622:1, 3:1, 1:1}, cvsuc3.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_ColorPickerGridState__V);\n_.private$com_vaadin_shared_ui_colorpicker_ColorPickerGridState$$init__V = function com_vaadin_shared_ui_colorpicker_ColorPickerGridState_$init__V(){\n}\n;\n_.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_columnCount = 0;\n_.com_vaadin_shared_ui_colorpicker_ColorPickerGridState_rowCount = 0;\n$entry(com_google_gwt_core_client_impl_AsyncFragmentLoader_onLoad__IV)(8);\n\n//# sourceURL=com.mgorshkov.lydia.MyAppWidgetset-8.js\n")
