import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor() { }
    Script(traceId:string){
      console.log("---script run");
      
      const srcScript = document.createElement('script') as HTMLScriptElement;
      srcScript.setAttribute("async","");
      srcScript.src="https://www.googletagmanager.com/gtag/js?id="+traceId;

      srcScript.innerHTML = ``
      document.head.appendChild(srcScript);

      const script = document.createElement('script') as HTMLScriptElement;
      script.innerHTML =` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${traceId}');`

      document.head.appendChild(script);

      console.log("script run---");

    }
}
