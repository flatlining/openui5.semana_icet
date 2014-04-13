/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.ListBoxRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("jquery.sap.strings");sap.ui.commons.ListBoxRenderer={};
sap.ui.commons.ListBoxRenderer.render=function(R,l){var a=R,r=sap.ui.commons.ListBoxRenderer;if(r.borderWidths===undefined){if(!!sap.ui.Device.browser.internet_explorer){var f=document.createElement("div");var s=sap.ui.getCore().getStaticAreaRef();s.appendChild(f);f.className="sapUiLbx";var $=jQuery(f);$.css("width","50px");$.css("min-width","100px");r.borderWidths=f.offsetWidth-100;s.removeChild(f)}else{r.borderWidths=0}}if(!l.getVisible()){return}a.addClass("sapUiLbx");var S=true;if(!l.getEditable()){a.addClass("sapUiLbxRo");S=false}if(!l.getEnabled()){a.addClass("sapUiLbxDis");S=false}if(S){a.addClass("sapUiLbxStd")}a.write("<div");a.writeControlData(l);a.writeAttribute("tabindex","-1");var w=l.getWidth();if(w){a.addStyle("width",w);var d=l.getDisplaySecondaryValues();if(!d){a.addClass("sapUiLbxFixed")}}if(!w||(w=="auto")||(w=="inherit")){a.addClass("sapUiLbxFlexWidth")}a.writeClasses();var m=l.getMinWidth();var M=l.getMaxWidth();if(!!sap.ui.Device.browser.internet_explorer){m=r.fixWidth(m);M=r.fixWidth(M)}if(m){a.addStyle("min-width",m)}if(M){a.addStyle("max-width",M)}if(l._bHeightInItems){if(l._sTotalHeight!=null){a.addStyle("height",l._sTotalHeight)}else{}}else{var h=l.getHeight();if(h){a.addStyle("height",h)}}a.writeStyles();var t=l.getTooltip_AsString();if(t){a.writeAttributeEscaped("title",t)}a.write(">");this.renderItemList(l,a);a.write("</div>")};
sap.ui.commons.ListBoxRenderer.renderItemList=function(l,r){r.write("<ul id='"+l.getId()+"-list'");r.writeAttribute("tabindex",this.getTabIndex(l));r.writeAccessibilityState(l,{role:"listbox",multiselectable:l.getAllowMultiSelect()});r.write(">");var a=l.getItems(),R=0,b=0;for(var i=0;i<a.length;i++){if(!(a[i]instanceof sap.ui.core.SeparatorItem)){b++}}var m=(!!sap.ui.Device.browser.internet_explorer&&(sap.ui.Device.browser.version==8||sap.ui.Device.browser.version==7));var d=l.getDisplaySecondaryValues();for(var i=0;i<a.length;i++){var c=a[i];if(c instanceof sap.ui.core.SeparatorItem){r.write("<div id='",c.getId(),"' class='sapUiLbxSep' role='separator'><hr/>");if(l.getDisplayIcons()){r.write("<hr/>")}if(d){r.write("<hr/>")}r.write("</div>")}else{r.write("<li");r.writeElementData(c);r.writeAttribute("data-sap-ui-lbx-index",i);r.addClass("sapUiLbxI");if(!c.getEnabled()){r.addClass("sapUiLbxIDis")}r.writeAttribute("tabindex","-1");if(l.isIndexSelected(i)){r.addClass("sapUiLbxISel")}r.writeClasses();var t=c.getText();var s=c.getAdditionalText?c.getAdditionalText():"";if(c.getTooltip_AsString()){r.writeAttributeEscaped("title",c.getTooltip_AsString())}else{r.writeAttributeEscaped("title",t+((d&&s)?"  --  "+s:""))}r.writeAccessibilityState(c,{role:"option",selected:(i===l.getSelectedIndex()),setsize:b,posinset:R+1});r.write(">");if(l.getDisplayIcons()){var I;if(c.getIcon){I=c.getIcon()}r.write("<span");if(sap.ui.core.IconPool.isIconURI(I)){r.addClass("sapUiLbxIIco");r.addClass("sapUiLbxIIcoFont");var o=sap.ui.core.IconPool.getIconInfo(I);r.addStyle("font-family","'"+o.fontFamily+"'");if(o&&!o.skipMirroring){r.addClass("sapUiIconMirrorInRTL")}r.writeClasses();r.writeStyles();r.write(">");r.write(o.content)}else{r.write(" class='sapUiLbxIIco'><img src='");if(I){r.writeEscaped(I)}else{r.write(sap.ui.resource('sap.ui.commons','img/1x1.gif'))}r.write("'/>")}r.write("</span>")}r.write("<span class='sapUiLbxITxt");if(m&&!d){r.write(" sapUiLbxILastChild")}r.write("'");r.writeAttribute("id",c.getId()+"-txt");var T=l.getValueTextAlign();if(T){r.write("style='text-align:"+sap.ui.commons.ListBoxRenderer.getTextAlign(T,null)+"'")}r.write(">");if(t===""||t===null){r.write("&nbsp;")}else{r.writeEscaped(t)}if(d){r.write("</span><span class='sapUiLbxISec");if(m){r.write(" sapUiLbxILastChild")}r.write("'");var T=l.getSecondaryValueTextAlign();if(T){r.write("style='text-align:"+sap.ui.commons.ListBoxRenderer.getTextAlign(T,null)+"'")}r.write(">");r.writeEscaped(s)}r.write("</span></li>");R++}}r.write("</ul>")};
sap.ui.commons.ListBoxRenderer.fixWidth=function(c){if(sap.ui.commons.ListBoxRenderer.borderWidths>0){if(c&&jQuery.sap.endsWithIgnoreCase(c,"px")){var w=parseInt(c.substr(0,c.length-2),10);var n=w-sap.ui.commons.ListBoxRenderer.borderWidths;if(n>=0){return n+"px"}}}return c};
sap.ui.commons.ListBoxRenderer.getTabIndex=function(l){if(l.getEnabled()&&l.getEditable()){return 0}else{return-1}};
sap.ui.commons.ListBoxRenderer.handleSelectionChanged=function(L){if(L.getDomRef()){var a=L.getItems();for(var i=0,l=a.length;i<l;i++){if(L.isIndexSelected(i)){jQuery.sap.byId(a[i].getId()).addClass("sapUiLbxISel").attr("aria-selected","true")}else{jQuery.sap.byId(a[i].getId()).removeClass("sapUiLbxISel").attr("aria-selected","false")}}}};
sap.ui.commons.ListBoxRenderer.handleARIAActivedescendant=function(l,i){var $=jQuery.sap.byId(l.getId()+"-list");if($.length>0){var a=$.children("li[data-sap-ui-lbx-index="+i+"]");$.attr("aria-activedescendant",a.attr("id"))}};
sap.ui.commons.ListBoxRenderer.getTextAlign=sap.ui.core.Renderer.getTextAlign;