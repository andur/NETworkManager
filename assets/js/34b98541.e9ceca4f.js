"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[5513],{9324:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=s(4848),d=s(8453);const t={sidebar_position:3},i="IP Scanner",c={id:"application/ip-scanner",title:"IP Scanner",description:"With the IP Scanner you can scan for active devices based on the hostname or in IP ranges that are reachable via icmp or have a common tcp port open.",source:"@site/docs/application/ip-scanner.md",sourceDirName:"application",slug:"/application/ip-scanner",permalink:"/NETworkManager/docs/application/ip-scanner",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/ip-scanner.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"WiFi",permalink:"/NETworkManager/docs/application/wifi"},next:{title:"Port Scanner",permalink:"/NETworkManager/docs/application/port-scanner"}},o={},l=[{value:"Profile",id:"profile",level:2},{value:"Inherit host from general",id:"inherit-host-from-general",level:3},{value:"Host",id:"host",level:3},{value:"Settings",id:"settings",level:2},{value:"Show unreachable IP addresses and ports",id:"show-unreachable-ip-addresses-and-ports",level:3},{value:"Attempts",id:"attempts",level:3},{value:"Timeout (ms)",id:"timeout-ms",level:3},{value:"Buffer",id:"buffer",level:3},{value:"Resolve hostname",id:"resolve-hostname",level:3},{value:"Scan ports",id:"scan-ports",level:3},{value:"Ports",id:"ports",level:3},{value:"Timeout (ms)",id:"timeout-ms-1",level:3},{value:"Scan for NetBIOS",id:"scan-for-netbios",level:3},{value:"Timeout (ms)",id:"timeout-ms-2",level:3},{value:"Resolve MAC address and vendor",id:"resolve-mac-address-and-vendor",level:3},{value:"Custom commands",id:"custom-commands",level:3},{value:"Max. concurrent host threads",id:"max-concurrent-host-threads",level:3},{value:"Max. concurrent port threads",id:"max-concurrent-port-threads",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ip-scanner",children:"IP Scanner"})}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.strong,{children:"IP Scanner"})," you can scan for active devices based on the hostname or in IP ranges that are reachable via icmp or have a common tcp port open."]}),"\n",(0,r.jsx)(n.p,{children:"Example inputs:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Host"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"10.0.0.1"})}),(0,r.jsxs)(n.td,{children:["Single IP address (",(0,r.jsx)(n.code,{children:"10.0.0.1"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"10.0.0.100 - 10.0.0.199"})}),(0,r.jsxs)(n.td,{children:["All IP addresses in a given range (",(0,r.jsx)(n.code,{children:"10.0.0.100"}),", ",(0,r.jsx)(n.code,{children:"10.0.0.101"}),", ..., ",(0,r.jsx)(n.code,{children:"10.0.0.199"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"10.0.0.0/23"})}),(0,r.jsxs)(n.td,{children:["All IP addresses in a subnet (",(0,r.jsx)(n.code,{children:"10.0.0.0"}),", ..., ",(0,r.jsx)(n.code,{children:"10.0.1.255"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"10.0.0.0/255.255.254.0"})}),(0,r.jsxs)(n.td,{children:["All IP addresses in a subnet (",(0,r.jsx)(n.code,{children:"10.0.0.0"}),", ..., ",(0,r.jsx)(n.code,{children:"10.0.1.255"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"10.0.[0-9,20].[1-2]"})}),(0,r.jsxs)(n.td,{children:["Multipe IP address like (",(0,r.jsx)(n.code,{children:"10.0.0.1"}),", ",(0,r.jsx)(n.code,{children:"10.0.0.2"}),", ",(0,r.jsx)(n.code,{children:"10.0.1.1"}),", ...,",(0,r.jsx)(n.code,{children:"10.0.9.2"}),", ",(0,r.jsx)(n.code,{children:"10.0.20.1"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"borntoberoot.net"})}),(0,r.jsxs)(n.td,{children:["Single IP address resolved from a host (",(0,r.jsx)(n.code,{children:"10.0.0.1"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"borntoberoot.net/24"})}),(0,r.jsxs)(n.td,{children:["All IP addresses in a subnet resolved from a host (",(0,r.jsx)(n.code,{children:"10.0.0.0"}),", ..., ",(0,r.jsx)(n.code,{children:"10.0.0.255"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"borntoberoot.net/255.255.255.0"})}),(0,r.jsxs)(n.td,{children:["All IP addresses in a subnet resolved from a host (",(0,r.jsx)(n.code,{children:"10.0.0.0"}),", ..., ",(0,r.jsx)(n.code,{children:"10.0.0.255"}),")"]})]})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["Multiple inputs can be combined with a semicolon (",(0,r.jsx)(n.code,{children:";"}),")."]}),(0,r.jsxs)(n.p,{children:["Example: ",(0,r.jsx)(n.code,{children:"10.0.0.0/24; 10.0.[10-20]1"})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The button to the left of the ",(0,r.jsx)(n.code,{children:"Scan"})," button determines the IP address and subnet mask of the network interface currently in use in order to scan the local subnet for active devices."]}),"\n",(0,r.jsxs)(n.p,{children:["If you right-click on a selected result, you can forward the device information to other applications (e.g. Port Scanner, Remote Desktop, etc), create a new profile with this information or execute a ",(0,r.jsx)(n.a,{href:"#custom-commands",children:"custom command"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"IP Scanner",src:s(1960).A+"",width:"1200",height:"800"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Right-click on the result to copy or export the information."})}),"\n",(0,r.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,r.jsx)(n.h3,{id:"inherit-host-from-general",children:"Inherit host from general"}),"\n",(0,r.jsx)(n.p,{children:"Inherit the host from the general settings."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If this option is enabled, the ",(0,r.jsx)(n.a,{href:"#host",children:"Host"})," is overwritten by the host from the general settings and the ",(0,r.jsx)(n.a,{href:"#host",children:"Host"})," is disabled."]})}),"\n",(0,r.jsx)(n.h3,{id:"host",children:"Host"}),"\n",(0,r.jsx)(n.p,{children:"Hostname or IP range to scan for active devices."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Empty"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"10.0.0.0/24; 10.0.[10-20].1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"server-01.borntoberoot.net"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["See also the ",(0,r.jsx)(n.a,{href:"./ip-scanner",children:"IP Scanner"})," example inputs for more information about the supported host formats."]})}),"\n",(0,r.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,r.jsx)(n.h3,{id:"show-unreachable-ip-addresses-and-ports",children:"Show unreachable IP addresses and ports"}),"\n",(0,r.jsx)(n.p,{children:"Show the scan result for all IP addresses and ports including the ones that are not active."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Disabled"})]}),"\n",(0,r.jsx)(n.h3,{id:"attempts",children:"Attempts"}),"\n",(0,r.jsx)(n.p,{children:"Attempts how often an icmp request is retried for each IP address if the request has timed out."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Integer"})," [Min ",(0,r.jsx)(n.code,{children:"1"}),", Max ",(0,r.jsx)(n.code,{children:"10"}),"]"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"2"})]}),"\n",(0,r.jsx)(n.h3,{id:"timeout-ms",children:"Timeout (ms)"}),"\n",(0,r.jsx)(n.p,{children:"Timeout in milliseconds for each icmp request and after which the packet is considered lost."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Integer"})," [Min ",(0,r.jsx)(n.code,{children:"100"}),", Max ",(0,r.jsx)(n.code,{children:"15000"}),"]"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"4000"})]}),"\n",(0,r.jsx)(n.h3,{id:"buffer",children:"Buffer"}),"\n",(0,r.jsx)(n.p,{children:"Size of the buffer for each icmp request in bytes."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Integer"})," [Min ",(0,r.jsx)(n.code,{children:"1"}),", Max ",(0,r.jsx)(n.code,{children:"65535"}),"]"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"32"})]}),"\n",(0,r.jsx)(n.h3,{id:"resolve-hostname",children:"Resolve hostname"}),"\n",(0,r.jsx)(n.p,{children:"Resolve the hostname (PTR) for each IP address."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,r.jsx)(n.h3,{id:"scan-ports",children:"Scan ports"}),"\n",(0,r.jsxs)(n.p,{children:["Scan each IP address for open ",(0,r.jsx)(n.code,{children:"tcp"})," ports."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,r.jsx)(n.h3,{id:"ports",children:"Ports"}),"\n",(0,r.jsxs)(n.p,{children:["List of ",(0,r.jsx)(n.code,{children:"tcp"})," ports to scan for each IP address."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"22; 53; 80; 139; 389; 636; 443; 445; 3389"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Multiple ports and port ranges can be combined with a semicolon (e.g. ",(0,r.jsx)(n.code,{children:"22; 80; 443"}),"). Only common and known ports should be scanned to check if a host is reachable. Use the ",(0,r.jsx)(n.a,{href:"./port-scanner",children:"Port Scanner"})," for a detailed port scan."]})}),"\n",(0,r.jsx)(n.h3,{id:"timeout-ms-1",children:"Timeout (ms)"}),"\n",(0,r.jsx)(n.p,{children:"Timeout in milliseconds after which a port is considered closed / timed out."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Integer"})," [Min ",(0,r.jsx)(n.code,{children:"100"}),", Max ",(0,r.jsx)(n.code,{children:"15000"}),"]"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"4000"})]}),"\n",(0,r.jsx)(n.h3,{id:"scan-for-netbios",children:"Scan for NetBIOS"}),"\n",(0,r.jsx)(n.p,{children:"Scan each IP address for NetBIOS information."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,r.jsx)(n.h3,{id:"timeout-ms-2",children:"Timeout (ms)"}),"\n",(0,r.jsx)(n.p,{children:"Timeout in milliseconds after which a NetBIOS request is considered lost."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Integer"})," [Min ",(0,r.jsx)(n.code,{children:"100"}),", Max ",(0,r.jsx)(n.code,{children:"15000"}),"]"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"4000"})]}),"\n",(0,r.jsx)(n.h3,{id:"resolve-mac-address-and-vendor",children:"Resolve MAC address and vendor"}),"\n",(0,r.jsx)(n.p,{children:"Resolve the MAC address and vendor for each IP address."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Due to the fact that the MAC address is resolved via ARP, the device must be in the same subnet as the IP address."})}),"\n",(0,r.jsx)(n.h3,{id:"custom-commands",children:"Custom commands"}),"\n",(0,r.jsx)(n.p,{children:"Custom commands that can be executed with a right click on the selected result."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"List<NETworkManager.Utilities.CustomCommandInfo>"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"File path"}),(0,r.jsx)(n.th,{children:"Arguments"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Edge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cmd.exe"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/c start microsoft-edge:http://$$ipaddress$$/"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Edge (https)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cmd.exe"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/c start microsoft-edge:https://$$ipaddress$$/"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Windows Explorer (c$)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"explorer.exe"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"\\\\$$ipaddress$$\\c$"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"In the arguments you can use the following placeholders:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Placeholder"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$$ipaddress$$"})}),(0,r.jsx)(n.td,{children:"IP address"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$$hostname$$"})}),(0,r.jsx)(n.td,{children:"Hostname"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"max-concurrent-host-threads",children:"Max. concurrent host threads"}),"\n",(0,r.jsx)(n.p,{children:"Maximal number of threads used to scan for active hosts (1 thread = 1 host/ip address)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Integer"})," [Min ",(0,r.jsx)(n.code,{children:"1"}),", Max ",(0,r.jsx)(n.code,{children:"512"}),"]"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"256"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Too many simultaneous requests may be blocked by a firewall. You can reduce the number of threads to avoid this, but this will increase the scan time."}),(0,r.jsx)(n.p,{children:"Too many threads can also cause performance problems on the device."})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This setting only change the maximum number of concurrently executed threads per host scan. See also the ",(0,r.jsx)(n.a,{href:"../settings/general#threadpool-additional-min-threads",children:"General"})," settings to configure the application wide thread pool."]})}),"\n",(0,r.jsx)(n.h3,{id:"max-concurrent-port-threads",children:"Max. concurrent port threads"}),"\n",(0,r.jsx)(n.p,{children:"Maximal number of threads that are used to scan for open ports for each host (IP address)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Integer"})," [Min ",(0,r.jsx)(n.code,{children:"1"}),", Max ",(0,r.jsx)(n.code,{children:"10"}),"]"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"5"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Too many simultaneous requests may be blocked by a firewall. You can reduce the number of threads to avoid this, but this will increase the scan time."}),(0,r.jsx)(n.p,{children:"Too many threads can also cause performance problems on the device."})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This setting only change the maximum number of concurrently executed threads per port scan. See also the ",(0,r.jsx)(n.a,{href:"../settings/general#threadpool-additional-min-threads",children:"General"})," settings to configure the application wide thread pool."]})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1960:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/ip-scanner-e2f0301cb34c5d99f5380fcbd5e8bbea.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(6540);const d={},t=r.createContext(d);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);