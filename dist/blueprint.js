var f=(u,n)=>{let t=u.split(".").map((i)=>Number(i)),g=n.split(".").map((i)=>Number(i));for(let i in t)if(t[i]>g[i])return-1;else if(g[i]>t[i])return 1;return 0};/*!
# code-editor

Information about the `<code-editor>` component blueprint.
*/var h="0.8.5",z="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",G="ace/theme/tomorrow",J=async(u,n)=>{let{Component:t,elements:g,vars:i,version:j}=n,{slot:k}=g,m=(s)=>{return new Promise((w)=>{let b=g.script({src:s});b.onload=()=>w(globalThis),document.head.append(b)})},{ace:r}=await m(`${z}ace.min.js`);if(f(h,j)<0)throw new Error(`blueprint requires xinjs ${h}`);class x extends t{source="";theme=G;mode="javascript";_options={};editor=null;constructor(){super();this.initAttributes("source","theme","mode")}static styleSpec={":host":{display:"block",minHeight:"100px"}};content=()=>k();connectedCallback(){if(super.connectedCallback(),!this.source)this.source=this.innerHTML||"";this.editor=r.edit(this,{mode:`ace/mode/${this.mode}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...this.options}),this.editor.setValue(this.source),this.editor.clearSelection(),this.editor.session.getUndoManager().reset()}role="textbox";render(){this.editor.setTheme(this.theme)}}return{type:x}},X=J;export{X as default,J as blueprint};

//# debugId=B79B5B8400EAD9CF64756E2164756E21
//# sourceMappingURL=blueprint.js.map
