/*!
 * 
 * voxels
 * 
 * @author Tiny Pixel Collective, Kelly Mears
 * @version 0.0.1
 * @link https://tinypixel.io/voxels
 * @license MIT
 * 
 * Copyright (c) 2018 Tiny Pixel Collective, Kelly Mears
 * 
 * This software is released under the MIT license. © 2018 Tiny Pixel Colletive, LLC.
 * 
 * Compiled with the help of https://wpack.io
 * A zero setup Webpack Bundler Script for WordPress
 */
(window.wpackiovoxelsblocksJsonp=window.wpackiovoxelsblocksJsonp||[]).push([[1],[function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var l=a.apply(null,o);l&&e.push(l)}else if("object"===r)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){"use strict";n.p=window.__wpackIovoxelsassets},function(e,t,n){n(1),e.exports=n(7)},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);n(3);var o=n(0),a=n.n(o),r=function(){return React.createElement("svg",{className:"dashicon dashicons-grid-view",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"20",height:"20"},React.createElement("path",{fill:"#444444",d:"M45,45H3c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h42c1.105,0,2,0.895,2,2v38C47,44.105,46.105,45,45,45z "}),React.createElement("rect",{x:"3",y:"10",fill:"#FFFFFF",width:"42",height:"33"}),React.createElement("path",{fill:"#B3B3B3",d:"M41,21H7c-0.553,0-1-0.448-1-1v-6c0-0.552,0.447-1,1-1h34c0.553,0,1,0.448,1,1v6C42,20.552,41.553,21,41,21z M8,19h32v-4H8V19z"}),React.createElement("path",{fill:"#B3B3B3",d:"M13,40H7c-0.553,0-1-0.448-1-1V25c0-0.552,0.447-1,1-1h6c0.553,0,1,0.448,1,1v14C14,39.552,13.553,40,13,40z M8,38h4V26H8V38z"}),React.createElement("path",{fill:"#B3B3B3",d:"M40,40H18c-0.553,0-1-0.448-1-1V25c0-0.552,0.447-1,1-1h22c0.553,0,1,0.448,1,1v14 C41,39.552,40.553,40,40,40z M19,38h20V26H19V38z"}),React.createElement("circle",{fill:"#E86C60",cx:"4.5",cy:"6.5",r:"1.5"}),React.createElement("circle",{fill:"#EFD358",cx:"9.5",cy:"6.5",r:"1.5"}),React.createElement("circle",{fill:"#72C472",cx:"14.5",cy:"6.5",r:"1.5"}))},l=function(){return React.createElement("svg",{className:"dashicon dashicons-grid-view",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"20",height:"20"},React.createElement("rect",{x:"2",y:"2",width:"40",height:"48",fill:"none","stroke-width":"2",stroke:"#000","stroke-miterlimit":"10"}),React.createElement("polyline",{points:"46.003 16.672 60.852 20.646 49.992 61.218 15.216 51.91",fill:"none","stroke-miterlimit":"10",stroke:"#000"}))},c=function(e){return React.createElement("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",width:e.width?e.width:20,height:e.height?e.height:20},React.createElement("path",{fill:e.color?e.color:"#fff",d:"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"}))},i=wp.blocks.registerBlockType,u=wp.i18n.__,s=wp.components,d=s.RangeControl,g=s.SelectControl,m=(s.TextControl,s.ToggleControl),b=s.Dashicon,v=s.IconButton,f=(s.Button,s.Toolbar,s.PanelBody),h=(s.RadioControl,s.BaseControl),p=(s.QueryControls,s.CheckboxControl,s.FormToggle,s.TextareaControl),C=wp.editor.InspectorControls?wp.editor:wp.blocks,R=C.InspectorControls,x=C.BlockControls,y=C.AlignmentToolbar,E=C.RichText,k=C.URLInput,B=C.MediaUpload,N=wp.editor,w=N.PanelColorSettings,z=N.BlockAlignmentToolbar,T=(N.InnerBlocks,wp.element),A=T.Fragment,I=(T.renderToString,lodash),H=(I.omit,I.merge,wp.hooks),S=(H.doAction,H.addAction,H.applyFilters);H.addFilter,wp.data.withSelect;var L=function(e){var t=e.className,n=void 0===t?"":t,o=e.align,r=void 0===o?"center":o,l=e.size,c=void 0===l?"small":l,i=e.color,s=e.text,d=void 0===s?"":s,g=e.backgroundColor,m=e.borderRadius,b=void 0===m?4:m,v=e.isSelected,f=void 0===v?null:v,h=e.hidden,p=void 0===h?"":h,C=e.onFocus,R=void 0===C?function(){}:C,x=e.onChange,y=void 0===x?function(){}:x,k={borderRadius:b+"px",backgroundColor:g||void 0},B=a()([n,"voxels-button","voxels-button-".concat(r),"voxels-button-".concat(c)]);return p?null:React.createElement("span",{className:B,style:k,"data-is-placeholder-visible":E.isEmpty(d)},React.createElement(E,{tagName:"span",placeholder:u("Enter Text"),value:d,onChange:y,formattingControls:["bold","italic","strikethrough"],className:"voxels-button-inner",style:{color:i},onFocus:R,isSelected:f,keepPlaceholderOnFocus:!0}))};var O=function(e){var t=e.className,n=void 0===t?"":t,o=e.align,r=void 0===o?"center":o,l=e.size,c=void 0===l?"normal":l,i=e.hidden,u=void 0===i?"":i,s=e.url,d=void 0===s?"":s,g=e.color,m=e.text,b=e.backgroundColor,v={borderRadius:e.borderRadius+"px",backgroundColor:b||void 0},f=a()([n,"voxels-button","voxels-button-".concat(r),"voxels-button-".concat(c)]);return u?null:React.createElement("div",{className:f,style:v},React.createElement(E.Content,{tagName:"a",className:"voxels-button-inner",href:d,style:{color:g},value:m}))};var U=function(e){var t=e.buttonHidden,n=e.buttonColor,o=e.buttonTextColor,a=e.buttonSize,r=e.buttonBorderRadius,l=e.onChangeButtonHidden,c=void 0===l?function(){}:l,i=e.onChangeButtonColor,s=void 0===i?function(){}:i,m=e.onChangeButtonTextColor,b=void 0===m?function(){}:m,v=e.onChangeButtonSize,f=void 0===v?function(){}:v,h=e.onChangeButtonBorderRadius,p=void 0===h?function(){}:h;return React.createElement(A,null,React.createElement(w,Object.assign({initialOpen:!1,title:u("Button Settings"),colorSettings:[{value:n,onChange:s,label:u("Button Color")},{value:o,onChange:b,label:u("Text Color")}]},e),React.createElement(g,{label:u("Hidden"),value:t,options:[{value:"",label:u("Button visible")},{value:"true",label:u("Button hidden")}],onChange:c}),React.createElement(g,{label:u("Size"),value:a,options:[{value:"small",label:u("Small")},{value:"normal",label:u("Normal")},{value:"medium",label:u("Medium")},{value:"large",label:u("Large")}],onChange:f}),React.createElement(d,{label:u("Border Radius"),value:r,min:"1",max:"50",onChange:p})))};i("voxels/button",{title:u("Button"),icon:function(){return React.createElement("svg",{className:"dashicon",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"20",height:"20"},React.createElement("path",{fill:"none",stroke:"#000",d:"M0,5.1v9.8h20V5.1H0z M17.8,12.7H2.2V7.3h15.5V12.7z"}))},description:"Add a customizable button",category:"common",keywords:[u("Button"),u("tinyPixel")],attributes:{url:{type:"string",source:"attribute",selector:"a",attribute:"href"},text:{source:"html",selector:"a"},align:{type:"string",default:"center"},buttonHidden:{type:"string",default:""},color:{type:"string"},textColor:{type:"string",default:"#ffffff"},size:{type:"string",default:"normal"},cornerButtonRadius:{type:"number",default:4},design:{type:"string",default:"basic"}},edit:function(e){var t=e.isSelected,n=e.className,o=e.setAttributes,r=e.attributes,l=r.url,c=r.text,i=r.color,s=r.textColor,d=r.buttonHidden,g=r.size,m=r.align,f=r.cornerButtonRadius,h=r.design,p=a()([n,"voxels-button"]),C=React.createElement(L,{onChange:function(e){return o({text:e})},className:p,align:m,hidden:"",size:g,backgroundColor:i,color:s,text:c,borderRadius:f}),y=S("tinypixel.designs.button.edit",C,h,e);return React.createElement(A,null,React.createElement(x,null,React.createElement(z,{value:m,onChange:function(e){o({align:e})},controls:["left","center","right","full"]})),React.createElement(R,null,React.createElement(U,{initialOpen:!0,buttonColor:i,buttonTextColor:s,buttonSize:g,buttonHidden:d,buttonBorderRadius:f,onChangeButtonHidden:function(e){return o({buttonHidden:e})},onChangeButtonColor:function(e){return o({color:e})},onChangeButtonTextColor:function(e){return o({textColor:e})},onChangeButtonSize:function(e){o({size:e})},onChangeButtonBorderRadius:function(e){return o({cornerButtonRadius:e})}})),y,t&&React.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:"blocks-button__inline-link"},React.createElement(b,{icon:"admin-links"}),React.createElement(k,{value:l,onChange:function(e){return o({url:e})}}),React.createElement(v,{icon:"editor-break",label:u("Apply"),type:"submit"})))},save:function(e){var t=e.className,n=e.attributes,o=n.url,r=n.text,l=n.align,c=n.color,i=n.textColor,u=n.size,s=n.buttonHidden,d=n.cornerButtonRadius,g=(n.design,a()([t,"voxels-button"]));return React.createElement(O,{hidden:s,className:g,align:l,size:u,url:o,color:i,text:r,backgroundColor:c,borderRadius:d})}});var D=function(e){var t=e.label,n=e.imageID,o=e.imageURL,a=e.onChange,r=void 0===a?function(e){e.url,e.id}:a,l=e.onRemove,c=void 0===l?function(){}:l,i=e.allowedTypes,u=void 0===i?["image"]:i,s=e.help;return React.createElement("div",{className:"voxels-image-control"},React.createElement(h,{label:t,help:s},React.createElement(B,{onSelect:r,allowedTypes:u,value:n,render:function(e){return React.createElement(A,null,o&&React.createElement("div",{className:"voxels-image-preview-wrapper"},React.createElement("button",{className:"voxels-image-preview-remove",onClick:c},React.createElement(b,{icon:"no"})),React.createElement("img",{className:"voxels-image-preview",src:o,onClick:e.open})),!o&&React.createElement("div",{className:"voxels-placeholder",onClick:e.open},React.createElement("svg",{viewBox:"0 0 512 376"},React.createElement("path",{d:"M0,0v376h512V0H0z M480,344H32V32h448V344z"}),React.createElement("circle",{cx:"409.1",cy:"102.9",r:"40.9"}),React.createElement("polygon",{points:"480,344 32,344 118.3,179.8 140,191.1 189,113.8 289,226.9 297.9,217.6 315,239.9 341,193.5 393.9,264.7 409,248.8"}))))}})))};var _,F,P,M=function(e){var t=e.backgroundColor,n=e.backgroundImageID,o=e.backgroundImageURL,a=e.backgroundOpacity,r=e.fixedBackground,l=e.onChangeBackgroundColor,c=void 0===l?function(){}:l,i=e.onChangeBackgroundImage,s=e.onRemoveBackgroundImage,g=e.onChangeBackgroundOpacity,b=e.onChangeFixedBackground;return React.createElement(A,null,React.createElement(w,Object.assign({initialOpen:!1,title:u("Background Settings"),colorSettings:[{value:t,onChange:c,label:u("Background Color")}]},e),i&&React.createElement(D,{label:u("Background Image"),onRemove:s,onChange:i,imageID:n,imageURL:o}),g&&React.createElement(d,{label:u("Background Image Tint Strength"),value:a,onChange:g,min:0,max:10,step:1}),b&&React.createElement(m,{label:u("Fixed Background"),checked:r,onChange:b})))};i("voxels/header",{title:u("Header"),icon:r,category:"common",keywords:[u("Advocacy"),u("Tiny Pixel Collective")],supports:(_={align:!0},F="align",P=["center","wide","full"],F in _?Object.defineProperty(_,F,{value:P,enumerable:!0,configurable:!0,writable:!0}):_[F]=P,_),attributes:{title:{source:"html",selector:"h2",default:u("Heading Title")},subtitle:{source:"html",selector:"p",default:u("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tincidunt nisit ut pretium. Duis blandit, tortor et suscipit tincidunt, dolor metus mattis neque, ac varius magna nibh ac tortor.")},titleColor:{type:"string",default:"#ffffff"},subtitleColor:{type:"string",default:"#ffffff"},size:{type:"string",default:"normal"},contentAlign:{type:"string",default:"center"},backgroundColor:{type:"string",default:"#000000"},backgroundImageID:{type:"number"},backgroundImageURL:{type:"string"},backgroundOpacity:{type:"number",default:5},fixedBackground:{type:"boolean",default:!1}},edit:function(e){var t=e.className,n=e.setAttributes,o=(e.isSelected,e.editable,e.setState,e.attributes),r=(o.size,o.title),l=o.titleColor,c=o.subtitle,i=o.subtitleColor,s=o.contentAlign,d=o.backgroundColor,g=o.backgroundImageID,m=o.backgroundImageURL,b=o.backgroundOpacity,v=o.fixedBackground,f=a()([t,"voxels-header","voxels-has-background-opacity-"+1*Math.round(b/1)],{"voxels-has-background":d||m,"voxels-has-background-image":m}),h={backgroundColor:d||void 0,backgroundImage:m?"url(".concat(m,")"):void 0,backgroundAttachment:v?"fixed":void 0,"--voxels-background-color":m?d:void 0,textAlign:s||void 0};return React.createElement(A,null,React.createElement(x,null,React.createElement(y,{value:s,onChange:function(e){return n({contentAlign:e})}})),React.createElement(R,null,React.createElement(w,{initialOpen:!0,title:u("Color Settings"),colorSettings:[{value:l,onChange:function(e){return n({titleColor:e})},label:u("Title Color")},{value:i,onChange:function(e){return n({subtitleColor:e})},label:u("Subtitle Color")}]}),React.createElement(M,{initialOpen:!0,backgroundColor:d,backgroundImageID:g,backgroundImageURL:m,backgroundOpacity:b,fixedBackground:v,onChangeBackgroundColor:function(e){return n({backgroundColor:e})},onChangeBackgroundImage:function(e){var t=e.url,o=e.id;return n({backgroundImageURL:t,backgroundImageID:o})},onRemoveBackgroundImage:function(){n({backgroundImageURL:"",backgroundImageID:0})},onChangeBackgroundOpacity:function(e){return n({backgroundOpacity:e})},onChangeFixedBackground:function(e){return n({fixedBackground:!!e})}})),React.createElement("div",{className:f,style:h},React.createElement("div",{className:"voxels-header-wrapper"},React.createElement(E,{tagName:"h2",className:"voxels-header-title",placeholder:r.default,value:r,onChange:function(e){return n({title:e})},style:{textAlign:s,color:l}}),React.createElement(E,{tagName:"p",className:"voxels-header-subtitle",placeholder:c.default,value:c,onChange:function(e){return n({subtitle:e})},style:{textAlign:s,color:i}}))))},save:function(e){var t=e.className,n=e.attributes,o=(n.size,n.title),r=n.titleColor,l=n.subtitle,c=n.subtitleColor,i=n.contentAlign,u=n.backgroundColor,s=n.backgroundImageURL,d=n.backgroundOpacity,g=n.fixedBackground,m=a()([t,"voxels-header","voxels-has-background-opacity-"+1*Math.round(d/1)],{"voxels-has-background":u||s,"voxels-has-background-image":s}),b={backgroundColor:u||void 0,backgroundImage:s?"url(".concat(s,")"):void 0,backgroundAttachment:g?"fixed":void 0,"--voxels-background-color":s?u:void 0,textAlign:i||void 0};return React.createElement("div",{className:m,style:b},React.createElement("div",{className:"voxels-header-wrapper"},!E.isEmpty(o)&&React.createElement(E.Content,{tagName:"h2",className:"voxels-header-title",style:{color:r},value:o}),!E.isEmpty(l)&&React.createElement(E.Content,{tagName:"p",className:"voxels-header-subtitle",style:{color:c},value:l})))}}),i("voxels/call-to-action",{title:u("Call to Action"),icon:r,category:"common",keywords:[u("Advocacy"),u("Tiny Pixel Collective")],supports:function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({align:!0},"align",["center","wide","full"]),attributes:{title:{source:"html",selector:"h2",default:u("Heading Title")},subtitle:{source:"html",selector:"p",default:u("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tincidunt nisit ut pretium. Duis blandit, tortor et suscipit tincidunt, dolor metus mattis neque, ac varius magna nibh ac tortor.")},buttonHidden:{type:"string",default:""},buttonURL:{type:"string",source:"attribute",selector:".voxels-button-inner",attribute:"href"},titleColor:{type:"string",default:"#ffffff"},subtitleColor:{type:"string",default:"#ffffff"},buttonText:{source:"html",selector:".voxels-button-inner",default:u("Button")},buttonColor:{type:"string"},buttonTextColor:{type:"string",default:"#ffffff"},size:{type:"string",default:"normal"},cornerButtonRadius:{type:"number",default:4},contentAlign:{type:"string",default:"center"},backgroundColor:{type:"string",default:"#000000"},backgroundImageID:{type:"number"},backgroundImageURL:{type:"string"},backgroundOpacity:{type:"number",default:5},fixedBackground:{type:"boolean",default:!1}},edit:function(e){var t=e.className,n=e.setAttributes,o=e.isSelected,r=(e.editable,e.setState,e.attributes),l=r.buttonURL,c=r.buttonText,i=r.buttonColor,s=r.buttonTextColor,d=r.cornerButtonRadius,g=r.buttonHidden,m=r.size,f=r.title,h=r.titleColor,p=r.subtitle,C=r.subtitleColor,B=r.contentAlign,N=r.backgroundColor,z=r.backgroundImageID,T=r.backgroundImageURL,I=r.backgroundOpacity,H=r.fixedBackground,S=a()([t,"voxels-call-to-action","voxels-has-background-opacity-"+1*Math.round(I/1)],{"voxels-has-background":N||T,"voxels-has-background-image":T}),O={backgroundColor:N||void 0,backgroundImage:T?"url(".concat(T,")"):void 0,backgroundAttachment:H?"fixed":void 0,"--voxels-background-color":T?N:void 0,textAlign:B||void 0};return React.createElement(A,null,React.createElement(x,null,React.createElement(y,{value:B,onChange:function(e){return n({contentAlign:e})}})),React.createElement(R,null,React.createElement(w,{initialOpen:!0,title:u("Color Settings"),colorSettings:[{value:h,onChange:function(e){return n({titleColor:e})},label:u("Title Color")},{value:C,onChange:function(e){return n({subtitleColor:e})},label:u("Subtitle Color")}]}),React.createElement(M,{initialOpen:!0,backgroundColor:N,backgroundImageID:z,backgroundImageURL:T,backgroundOpacity:I,fixedBackground:H,onChangeBackgroundColor:function(e){return n({backgroundColor:e})},onChangeBackgroundImage:function(e){var t=e.url,o=e.id;return n({backgroundImageURL:t,backgroundImageID:o})},onRemoveBackgroundImage:function(){n({backgroundImageURL:"",backgroundImageID:0})},onChangeBackgroundOpacity:function(e){return n({backgroundOpacity:e})},onChangeFixedBackground:function(e){return n({fixedBackground:!!e})}}),React.createElement(U,{initialOpen:!1,buttonColor:i,buttonTextColor:s,buttonSize:m,buttonHidden:g,buttonBorderRadius:d,onChangeButtonHidden:function(e){return n({buttonHidden:e})},onChangeButtonColor:function(e){return n({buttonColor:e})},onChangeButtonTextColor:function(e){return n({buttonTextColor:e})},onChangeButtonSize:function(e){n({size:e})},onChangeButtonBorderRadius:function(e){return n({cornerButtonRadius:e})}})),React.createElement("div",{className:S,style:O},React.createElement("div",{className:"voxels-call-to-action-wrapper"},React.createElement(E,{tagName:"h2",className:"voxels-call-to-action-title",placeholder:f.default,value:f,onChange:function(e){return n({title:e})},style:{textAlign:B,color:h}}),React.createElement(E,{tagName:"p",className:"voxels-call-to-action-subtitle",placeholder:p.default,value:p,onChange:function(e){return n({subtitle:e})},style:{textAlign:B,color:C}}),!g&&React.createElement(L,{hidden:g,size:m,align:B,color:s,backgroundColor:i,text:c,borderRadius:d,onChange:function(e){return n({buttonText:e})}}))),o&&!g&&React.createElement("form",{key:"form-link",onSubmit:function(e){return e.preventDefault()},className:"blocks-button__inline-link voxels-button-".concat(B)},React.createElement(b,{icon:"admin-links"}),React.createElement(k,{value:l,onChange:function(e){return n({buttonURL:e})}}),React.createElement(v,{icon:"editor-break",label:u("Apply"),type:"submit"})))},save:function(e){var t=e.className,n=e.attributes,o=n.buttonURL,r=n.buttonText,l=n.buttonColor,c=n.buttonHidden,i=n.buttonTextColor,u=n.cornerButtonRadius,s=n.size,d=n.title,g=n.titleColor,m=n.subtitle,b=n.subtitleColor,v=n.contentAlign,f=n.backgroundColor,h=n.backgroundImageURL,p=n.backgroundOpacity,C=n.fixedBackground,R=a()([t,"voxels-call-to-action","voxels-has-background-opacity-"+1*Math.round(p/1)],{"voxels-has-background":f||h,"voxels-has-background-image":h}),x={backgroundColor:f||void 0,backgroundImage:h?"url(".concat(h,")"):void 0,backgroundAttachment:C?"fixed":void 0,"--voxels-background-color":h?f:void 0,textAlign:v||void 0};return React.createElement("div",{className:R,style:x},React.createElement("div",{className:"voxels-call-to-action-wrapper"},!E.isEmpty(d)&&React.createElement(E.Content,{tagName:"h2",className:"voxels-call-to-action-title",style:{color:g},value:d}),!E.isEmpty(m)&&React.createElement(E.Content,{tagName:"p",className:"voxels-call-to-action-subtitle",style:{color:b},value:m}),r&&!!r.length&&!c&&React.createElement(O,{hidden:c,size:s,url:o,align:v,color:i,text:r,backgroundColor:l,borderRadius:u})))}});var V={heading:{source:"html",selector:".voxels-card h4",default:u("Your Headline Here")},des:{source:"html",selector:".voxels-card-des",default:u("The Headline concept and buttressing tagline are followed by a brief description. Remember to set an image and BAM! You've got yourself a card 👏🏽")},headingColor:{type:"string"},desColor:{type:"string"},buttonURL:{type:"string",source:"attribute",selector:".voxels-button-inner",attribute:"href"},buttonText:{source:"html",selector:".voxels-button-inner",default:u("Button")},buttonColor:{type:"string"},buttonTextColor:{type:"string",default:"#ffffff"},buttonHidden:{type:"string",default:""},size:{type:"string",default:"normal"},cornerButtonRadius:{type:"number",default:4},contentAlign:{type:"string",default:"left"}};i("voxels/card",{title:u("Card"),icon:l,category:"common",keywords:[u("Card"),u("voxels")],attributes:V,edit:function(e){var t=e.isSelected,n=e.className,o=e.setAttributes,r=e.attributes,l=r.heading,c=r.des,i=r.headingColor,s=r.desColor,d=r.buttonHidden,g=r.buttonURL,m=r.buttonText,f=r.buttonColor,h=r.buttonTextColor,p=r.size,C=r.cornerButtonRadius,B=r.contentAlign,N=a()([n,"voxels-card"]);return React.createElement(A,null,React.createElement(x,null,React.createElement(y,{value:B,onChange:function(e){return o({contentAlign:e})}})),React.createElement(R,null,React.createElement(w,{title:u("Text Colors"),colorSettings:[{value:i,onChange:function(e){return o({headingColor:e})},label:u("Heading Color")},{value:s,onChange:function(e){return o({desColor:e})},label:u("Description Color")}]}),React.createElement(U,{initialOpen:!1,buttonHidden:d,buttonColor:f,buttonTextColor:h,buttonSize:p,buttonBorderRadius:C,onChangeButtonHidden:function(e){return o({buttonHidden:e})},onChangeButtonColor:function(e){return o({buttonColor:e})},onChangeButtonTextColor:function(e){return o({buttonTextColor:e})},onChangeButtonSize:function(e){o({size:e})},onChangeButtonBorderRadius:function(e){return o({cornerButtonRadius:e})}})),React.createElement("div",{className:N},React.createElement(E,{tagName:"h4",value:l,className:"voxels-card-heading",onChange:function(e){return o({heading:e})},style:{color:i,textAlign:B},keepPlaceholderOnFocus:!0}),React.createElement(E,{tagName:"p",value:c,className:"voxels-card-des",onChange:function(e){return o({des:e})},style:{color:s,textAlign:B},keepPlaceholderOnFocus:!0}),React.createElement(L,{hidden:d,size:p,align:B,color:h,backgroundColor:f,text:m,borderRadius:C,onChange:function(e){return o({buttonText:e})}})),t&&!d&&React.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:"blocks-button__inline-link voxels-button-".concat(B),style:{marginTop:10}},React.createElement(A,null,React.createElement(b,{icon:"admin-links"}),React.createElement(k,{value:g,onChange:function(e){return o({buttonURL:e})}}),React.createElement(v,{icon:"editor-break",label:u("Apply"),type:"submit"}))))},save:function(e){var t=e.className,n=e.attributes,o=n.heading,r=n.des,l=n.headingColor,c=n.desColor,i=n.buttonHidden,u=n.buttonURL,s=n.buttonText,d=n.buttonColor,g=n.buttonTextColor,m=n.size,b=n.cornerButtonRadius,v=n.contentAlign,f=a()([t,"voxels-card"]);return React.createElement("div",{className:f},!E.isEmpty(o)&&React.createElement(E.Content,{tagName:"h4",style:{color:l,textAlign:v},value:o}),!E.isEmpty(r)&&React.createElement(E.Content,{tagName:"p",className:"voxels-card-des",style:{color:c,textAlign:v},value:r}),React.createElement(O,{hidden:i,size:m,url:u,align:v,color:g,text:s,backgroundColor:d,borderRadius:b}))}});var j=function(e){var t=e.imageID,n=e.imageURL,o=e.onChange,r=void 0===o?function(e){e.url,e.id}:o,l=e.onRemove,c=void 0===l?function(){}:l,i=e.className,u=void 0===i?"":i,s=e.allowedTypes,d=void 0===s?["image"]:s,g=e.render,m=void 0===g?void 0:g,v=e.hasRemove,f=void 0===v||v,h=a()([u,"voxels-image-upload-placeholder"],{"voxels-image-upload-has-image":n,"voxels-image-upload-has-placeholder":!n}),p={backgroundImage:n&&!m?"url(".concat(n,")"):void 0};return React.createElement(B,{onSelect:r,allowedTypes:d,value:t,render:function(t){return n&&m?React.createElement("div",Object.assign({},e,{render:void 0,className:h,onClick:t.open,style:p,"data-is-placeholder-visible":!n}),m):React.createElement("div",Object.assign({},e,{className:h,onClick:t.open,style:p,"data-is-placeholder-visible":!n}),n&&f&&React.createElement("button",{className:"voxels-image-upload-remove",onClick:function(e){c(),e.stopPropagation()}},React.createElement(b,{icon:"no"})),!n&&React.createElement("svg",{viewBox:"0 0 512 376"},React.createElement("path",{d:"M0,0v376h512V0H0z M480,344H32V32h448V344z"}),React.createElement("circle",{cx:"409.1",cy:"102.9",r:"40.9"}),React.createElement("polygon",{points:"480,344 32,344 118.3,179.8 140,191.1 189,113.8 289,226.9 297.9,217.6 315,239.9 341,193.5 393.9,264.7 409,248.8"})))}})},Y={mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:".voxels-card-image-container",attribute:"data-src"},heading:{source:"html",selector:".voxels-card h4",default:u("Your Headline Here")},des:{source:"html",selector:".voxels-card-des",default:u("Spectrum designator equarium dignity. Forensia tonne palor, a quastridian nun.")},headingColor:{type:"string"},desColor:{type:"string"},buttonURL:{type:"string",source:"attribute",selector:".voxels-button-inner",attribute:"href"},buttonText:{source:"html",selector:".voxels-button-inner",default:u("Button")},buttonHidden:{type:"string"},buttonColor:{type:"string"},buttonTextColor:{type:"string",default:"#ffffff"},size:{type:"string",default:"normal"},cornerButtonRadius:{type:"number",default:4},contentAlign:{type:"string",default:"left"}};i("voxels/polaroid",{title:u("Polaroid"),icon:l,category:"common",keywords:[u("voxels"),u("Card"),u("Polaroid")],attributes:Y,edit:function(e){var t=e.isSelected,n=(e.editable,e.setState,e.className),o=e.setAttributes,r=e.attributes,l=r.heading,c=r.des,i=r.mediaID,s=r.mediaURL,d=r.headingColor,g=r.desColor,m=r.buttonURL,f=r.buttonText,h=r.buttonColor,p=r.buttonHidden,C=r.buttonTextColor,B=r.size,N=r.cornerButtonRadius,z=r.contentAlign,T=a()([n,"voxels-card"]);return React.createElement(A,null,React.createElement(x,null,React.createElement(y,{value:z,onChange:function(e){return o({contentAlign:e})}})),React.createElement(R,null,React.createElement(w,{title:u("Text Colors"),colorSettings:[{value:d,onChange:function(e){return o({headingColor:e})},label:u("Heading Color")},{value:g,onChange:function(e){return o({desColor:e})},label:u("Description Color")}]}),React.createElement(U,{initialOpen:!1,buttonColor:h,buttonTextColor:C,buttonSize:B,buttonHidden:p,buttonBorderRadius:N,onChangeButtonHidden:function(e){return o({buttonHidden:e})},onChangeButtonColor:function(e){return o({buttonColor:e})},onChangeButtonTextColor:function(e){return o({buttonTextColor:e})},onChangeButtonSize:function(e){o({size:e})},onChangeButtonBorderRadius:function(e){return o({cornerButtonRadius:e})}})),React.createElement("div",{className:T},React.createElement(j,{className:"voxels-card-image-container",imageID:i,imageURL:s,onRemove:function(){o({mediaURL:"",mediaID:""})},onChange:function(e){var t=e.url,n=e.id;o({mediaURL:t,mediaID:n})}}),React.createElement(E,{tagName:"h4",value:l,className:"voxels-card-heading",onChange:function(e){return o({heading:e})},style:{color:d,textAlign:z},keepPlaceholderOnFocus:!0}),React.createElement(E,{tagName:"p",value:c,className:"voxels-card-des",onChange:function(e){return o({des:e})},style:{color:g,textAlign:z},keepPlaceholderOnFocus:!0}),!p&&React.createElement(L,{hidden:p,size:B,align:z,color:C,backgroundColor:h,text:f,borderRadius:N,onChange:function(e){return o({buttonText:e})}})),t&&!p&&React.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:"blocks-button__inline-link voxels-button-".concat(z),style:{marginTop:10}},React.createElement(b,{icon:"admin-links"}),React.createElement(k,{value:m,onChange:function(e){return o({buttonURL:e})}}),React.createElement(v,{icon:"editor-break",label:u("Apply"),type:"submit"})))},save:function(e){var t=e.className,n=e.attributes,o=n.heading,r=n.des,l=n.mediaURL,c=n.headingColor,i=n.desColor,u=n.buttonURL,s=n.buttonText,d=n.buttonColor,g=n.buttonHidden,m=n.buttonTextColor,b=n.size,v=n.cornerButtonRadius,f=n.contentAlign,h=a()([t,"voxels-card"],{"has-image":l});return React.createElement("div",{className:h},l&&React.createElement("div",{className:"voxels-card-image-container",style:{backgroundImage:"url(".concat(l,")"),textAlign:f},"data-src":l}),!E.isEmpty(o)&&React.createElement(E.Content,{tagName:"h4",style:{color:c,textAlign:f},value:o}),!E.isEmpty(r)&&React.createElement(E.Content,{tagName:"p",className:"voxels-card-des",style:{color:i,textAlign:f},value:r}),s&&!!s.length&&React.createElement(O,{hidden:g,size:b,url:u,align:f,color:m,text:s,backgroundColor:d,borderRadius:v}))}});var q={mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:".voxels-card-horizontal-image",attribute:"data-src"},heading:{source:"html",selector:".voxels-card-horizontal h4",default:u("Your Headline Here")},des:{source:"html",selector:".voxels-card-horizontal-description",default:u("The Headline concept and buttressing tagline are followed by a brief description. Remember to set an image and BAM! You've got yourself a card 👏🏽")},headingColor:{type:"string"},desColor:{type:"string"},buttonURL:{type:"string",source:"attribute",selector:".voxels-button-inner",attribute:"href"},buttonHidden:{type:"string"},buttonText:{source:"html",selector:".voxels-button-inner",default:u("Button")},buttonColor:{type:"string"},buttonTextColor:{type:"string",default:"#ffffff"},size:{type:"string",default:"normal"},cornerButtonRadius:{type:"number",default:4},contentAlign:{type:"string",default:"left"}};function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function W(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}i("voxels/horizontal",{title:u("Horizontal Card"),icon:l,category:"common",keywords:[u("voxels"),u("Card"),u("horizontal")],attributes:q,edit:function(e){var t=e.isSelected,n=(e.editable,e.setState,e.className),o=e.setAttributes,r=e.attributes,l=r.heading,c=r.des,i=r.mediaID,s=r.mediaURL,d=r.headingColor,g=r.buttonHidden,m=r.desColor,f=r.buttonURL,h=r.buttonText,p=r.buttonColor,C=r.buttonTextColor,B=r.size,N=r.cornerButtonRadius,z=r.contentAlign,T=a()([n,"voxels-card-horizontal-container voxels-card-horizontal"]);return React.createElement(A,null,React.createElement(x,null,React.createElement(y,{value:z,onChange:function(e){return o({contentAlign:e})}})),React.createElement(R,null,React.createElement(w,{title:u("Text Colors"),colorSettings:[{value:d,onChange:function(e){return o({headingColor:e})},label:u("Heading Color")},{value:m,onChange:function(e){return o({desColor:e})},label:u("Description Color")}]}),React.createElement(U,{initialOpen:!1,buttonHidden:g,buttonColor:p,buttonTextColor:C,buttonSize:B,buttonBorderRadius:N,onChangeButtonHidden:function(e){return o({buttonHidden:e})},onChangeButtonColor:function(e){return o({buttonColor:e})},onChangeButtonTextColor:function(e){return o({buttonTextColor:e})},onChangeButtonSize:function(e){o({size:e})},onChangeButtonBorderRadius:function(e){return o({cornerButtonRadius:e})}})),React.createElement("div",{className:T},React.createElement(j,{className:"voxels-card-horizontal-image",imageID:i,imageURL:s,onRemove:function(){o({mediaURL:"",mediaID:""})},onChange:function(e){var t=e.url,n=e.id;o({mediaURL:t,mediaID:n})}}),React.createElement("div",{className:"voxels-card-horizontal-stacked"},React.createElement("div",{className:"voxels-card-horizontal-content"},React.createElement(E,{tagName:"h4",value:l,className:"voxels-card-horizontal-title",onChange:function(e){return o({heading:e})},style:{color:d,textAlign:z},keepPlaceholderOnFocus:!0}),React.createElement(E,{tagName:"p",value:c,className:"voxels-card-horizontal-description",onChange:function(e){return o({des:e})},style:{color:m,textAlign:z},keepPlaceholderOnFocus:!0})),!g&&React.createElement("div",{className:"voxels-card-horizontal-action"},React.createElement(L,{hidden:g,size:B,align:z,color:C,backgroundColor:p,text:h,borderRadius:N,onChange:function(e){return o({buttonText:e})}})))),t&&!g&&React.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:"blocks-button__inline-link voxels-button-".concat(z),style:{marginTop:10}},React.createElement(b,{icon:"admin-links"}),React.createElement(k,{value:f,onChange:function(e){return o({buttonURL:e})}}),React.createElement(v,{icon:"editor-break",label:u("Apply"),type:"submit"})))},save:function(e){var t=e.className,n=e.attributes,o=n.heading,r=n.des,l=n.mediaURL,c=(n.mediaID,n.headingColor),i=(n.taglineColor,n.buttonHidden),u=n.desColor,s=n.buttonURL,d=n.buttonText,g=n.buttonColor,m=n.buttonTextColor,b=n.size,v=n.cornerButtonRadius,f=n.contentAlign,h=a()([t,"voxels-card-horizontal-container voxels-card-horizontal"]);return React.createElement("div",{className:h},l&&React.createElement("div",{className:"voxels-card-horizontal-image",style:{backgroundImage:"url(".concat(l,")"),textAlign:f},"data-src":l}),React.createElement("div",{className:"voxels-card-horizontal-stacked"},React.createElement("div",{className:"voxels-card-horizontal-content"},!E.isEmpty(o)&&React.createElement(E.Content,{tagName:"h4",className:"voxels-card-horizontal-title",style:{color:c,textAlign:f},value:o}),!E.isEmpty(r)&&React.createElement(E.Content,{tagName:"p",className:"voxels-card-horizontal-description",style:{color:u,textAlign:f},value:r})),!i&&React.createElement("div",{className:"voxels-card-horizontal-action"},React.createElement(O,{hidden:i,size:b,url:s,align:f,color:m,text:d,backgroundColor:g,borderRadius:v}))))}});var X=wp.compose,Z=X.compose,$=X.withState,ee=wp.element.Component,te=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),W(this,G(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,ee),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.attributes.hashtags,n=e.setAttributes;return React.createElement(R,null,React.createElement(f,{title:u("Hashtags","voxels")},React.createElement(p,{label:u("Hashtags","voxels"),help:u("Will be automatically appended to end of tweet","voxels"),onChange:function(e){return n({hashtags:e})},value:t,rows:"2"})))}}])&&Q(n.prototype,o),a&&Q(n,a),t}(),ne=Z([$({preview:!1})])(te);i("voxels/click-to-tweet",{title:u("Click to tweet","voxels"),description:u("Lets users share content to Twitter","voxels"),category:"common",icon:{background:"#0084b4",foreground:"#FFF",src:React.createElement(c,{color:"#fff"})},keywords:["twitter"],attributes:{content:{type:"string"},hashtags:{type:"string"},twitterIntent:{type:"string",default:"https://twitter.com/intent/tweet?text="},bubbleColor:{type:"string",default:"rgb(68, 198, 232)"},bubbleBottomColor:{type:"string",default:"rgb(0, 115, 168)"}},edit:function(e){var t=e.attributes,n=e.className,o=e.setAttributes,a=t.content,r=t.bubbleColor,l=t.bubbleBottomColor;return React.createElement(A,null,React.createElement(ne,{attributes:t,setAttributes:o}),React.createElement(R,null,React.createElement(w,{title:u("Color Settings"),colorSettings:[{value:r,onChange:function(e){return o({bubbleColor:e})},label:u("Top bubble background color")},{value:l,onChange:function(e){return o({bubbleBottomColor:e})},label:u("Bottom bubble background color")}]})),React.createElement("div",{className:n},React.createElement(E,{tagName:"div",format:"string",value:a,className:"__content",onChange:function(e){return o({content:e})},placeholder:"Your tweetable content",style:{backgroundColor:r}}),React.createElement("footer",{className:"__footer",style:{backgroundColor:l}},React.createElement(c,null)," Tweet this",React.createElement("div",{className:"__footer-triangle",style:{borderTop:"20px solid ".concat(l)}}))))},save:function(e){var t=e.attributes,n=e.className,o=t.content,a=t.hashtags,r=t.bubbleColor,l=t.bubbleBottomColor,i=t.twitterIntent+encodeURIComponent(t.content);return t.hashtags&&(i+=encodeURIComponent(" "+t.hashtags)),React.createElement("div",{className:n},React.createElement("div",{className:"__content",style:{backgroundColor:r}},o," ",a),React.createElement("footer",{className:"__footer",style:{backgroundColor:l}},React.createElement("a",{href:i},React.createElement(c,null)," Tweet this"),React.createElement("div",{className:"__footer-triangle",style:{borderTop:"20px solid ".concat(l)}})))}})}],[[2,0]]]);
//# sourceMappingURL=editor-7a0d4922.js.map