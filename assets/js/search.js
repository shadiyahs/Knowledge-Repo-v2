var SEARCH_INDEX=[
  {t:"AP & CO RPA Playbook",k:"rpa playbook infor automation ap co",url:"reports/rpa-playbook/index.html",cat:"I&I — Product Bridge"},
  {t:"I&I March — Agentic AI Strategy",k:"agentic ai strategy cloudsuite march infor",url:"reports/agentic-ai-strategy/index.html",cat:"I&I — Unplugged"},
  {t:"I&I April — IT Market Trends 2026",k:"market trends 2026 enterprise it april",url:"reports/it-market-trends/index.html",cat:"I&I — Unplugged"},
  {t:"Agentic AI Use Cases for Manufacturing",k:"agentic ai manufacturing infor m3 use cases",url:"reports/report2_manufacturing_use_cases.html",cat:"I&I — Unplugged"},
  {t:"Copilot Roadmap for Digital Transformation",k:"copilot roadmap microsoft digital transformation",url:"reports/report3_copilot_roadmap.html",cat:"I&I — Unplugged"},
  {t:"Fortest 4.0 & Copilot",k:"fortest copilot product roadmap testing 4.0",url:"reports/report4_fortest_copilot.html",cat:"I&I — Market Research"},
  {t:"Infor M3 & CloudSuite",k:"infor m3 cloudsuite erp fortest charlie implementations",url:"practices/infor-m3-cloudsuite.html",cat:"Practice"},
  {t:"Business Central & Dynamics 365",k:"business central dynamics 365 microsoft erp migration testing",url:"practices/business-central.html",cat:"Practice"},
  {t:"Data & AI",k:"data ai charlie charliex analytics governance",url:"practices/data-ai.html",cat:"Practice"},
  {t:"Automation",k:"automation agentic rpa intelligent document warehouse supply chain",url:"practices/automation.html",cat:"Practice"},
  {t:"Low Code Application Development",k:"low code app development ui ux integration hypercare",url:"practices/low-code.html",cat:"Practice"},
  {t:"Managed Services",k:"managed services application testing data ai automation",url:"practices/managed-services.html",cat:"Practice"},
  {t:"Digital & AI Advisory",k:"advisory digital maturity assessment ai realization dma pulse heatmaps",url:"practices/advisory.html",cat:"Practice"},
  {t:"Insights & Intelligence",k:"insights intelligence unplugged product bridge market research",url:"enablers/insights-intelligence.html",cat:"Enabler"},
  {t:"Sales",k:"sales playbook battlecard case study objection onboarding decks scripts engagement",url:"enablers/sales.html",cat:"Enabler"},
  {t:"Presales",k:"presales proposal sow demo maturity assessment kit",url:"enablers/presales.html",cat:"Enabler"},
  {t:"Marketing",k:"marketing webinar white paper blog infographic event brand brochure case study",url:"enablers/marketing.html",cat:"Enabler"},
  {t:"Partners",k:"partners co-sell alliance programme",url:"enablers/partners.html",cat:"Enabler"}
];

(function(){
  function depth(path){
    var segs=path.replace(/^\/|\/$/, '').split('/').filter(Boolean);
    var prefix='';
    for(var i=1;i<segs.length;i++) prefix+='../';
    return prefix;
  }

  function initSearch(){
    var inp=document.getElementById('globalSearch');
    if(!inp) return;
    var overlay=document.getElementById('searchOverlay');
    var results=document.getElementById('searchResults');
    if(!overlay||!results) return;

    var base=depth(window.location.pathname);

    inp.addEventListener('input',function(){
      var q=this.value.trim().toLowerCase();
      if(!q){overlay.style.display='none';return;}
      var hits=SEARCH_INDEX.filter(function(r){
        return r.t.toLowerCase().indexOf(q)>-1||r.k.indexOf(q)>-1;
      });
      if(!hits.length){
        results.innerHTML='<div style="padding:12px 16px;font-size:12px;color:#8A9BAB;">No results found</div>';
      } else {
        results.innerHTML=hits.map(function(h){
          return '<a href="'+base+h.url+'" style="display:flex;align-items:center;gap:10px;padding:9px 14px;text-decoration:none;border-bottom:1px solid rgba(13,33,56,0.06);">'+
            '<span style="font-size:9px;font-weight:700;background:rgba(39,181,232,0.1);color:#0C6E8E;padding:2px 7px;border-radius:3px;white-space:nowrap;">'+h.cat+'</span>'+
            '<span style="font-size:12px;font-weight:600;color:#0D2138;">'+h.t+'</span>'+
          '</a>';
        }).join('');
      }
      overlay.style.display='block';
    });

    document.addEventListener('click',function(e){
      if(!overlay.contains(e.target)&&e.target!==inp) overlay.style.display='none';
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',initSearch);
  } else {
    initSearch();
  }
})();
