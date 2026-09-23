async function importMuchiExplore(){
  const urls=[
    'https://cdn.jsdelivr.net/gh/AliceNekoqqq/Muchi-Explore-Engine@v1.5.8/index.js?explore=158',
    'https://testingcf.jsdelivr.net/gh/AliceNekoqqq/Muchi-Explore-Engine@b5822294477e21def14b6c2efe876494ab303b2b/index.js?explore=158',
    'https://fastly.jsdelivr.net/gh/AliceNekoqqq/Muchi-Explore-Engine@b5822294477e21def14b6c2efe876494ab303b2b/index.js?explore=158'
  ];
  const errors=[];
  for(const url of urls){
    try{
      const mod=await import(url);
      if(mod.EXPLORE_VERSION!=='1.5.8')throw new Error('探索模块版本不匹配');
      if(typeof mod?.mountExplore==='function' && typeof mod?.openExplore==='function') return mod;
      errors.push(`${url} -> 导出不匹配: ${Object.keys(mod||{}).join(',')||'无导出'}`);
    }catch(e){errors.push(`${url} -> ${e?.message||e}`)}
  }
  throw new Error('暮迟现场探索引擎加载失败；请先把 Muchi-Explore-Engine v1.5.8 文件上传到独立 GitHub 仓库 main。'+errors.join(' | '));
}
const muchiExplore=await importMuchiExplore();
const muchiExploreApi=await muchiExplore.mountExplore();
if(!muchiExploreApi?.open) throw new Error('暮迟现场探索引擎已下载，但挂载失败');

const __muchiExploreOpen=muchiExploreApi.open?.bind(muchiExploreApi);
if(__muchiExploreOpen){
  muchiExploreApi.open=async(opts={})=>{
    const root=await __muchiExploreOpen(opts);
    setTimeout(()=>{const host=globalThis.$?.('body')?.[0]?.ownerDocument?.defaultView||window.parent||window;host.MuchiTutorial?.start?.('explore-panel',{root:root||host.document.getElementById('muchi-explore-v154'),title:'现场探索',steps:[
      {target:'.me-side',title:'选择搜索区域',text:'这一排是当前地点的具体搜索区域。手机上左右滑动；深色卡片是普通区域，描边高亮表示当前选中。'},
      {target:'.me-privacy',title:'临时隐蔽',text:'这里显示当前区域的隐蔽性与可封闭条件。是否停留或采取行动，由你在正文中决定。'},
      {target:'.me-roundbar',title:'现场行动轮',text:'行动余量只用来限制一次连续搜索的节奏，不是传统战棋。回到正文推进后才会开启新的现场行动轮。'},
      {target:'.me-actions',title:'搜索深度',text:'快速、仔细、彻底会逐级增加耗时和暴露风险。已经完成的深度不会反复重Roll；世界后续变化则允许“复查现场”。'},
      {target:'.me-section',title:'结果与待收取',text:'搜到物资后会在下方出现待收取区；真正收进背包后才会进入库存并扣除地点资源。'},
      {target:'.me-close',title:'关闭探索',text:'可以随时关闭。关闭本身不会刷新行动点，也不会让已经搜索过的内容重置。'}
    ]})},180);
    return root;
  };
}


const __muchiExploreTourOnly=()=>setTimeout(()=>{const host=globalThis.$?.('body')?.[0]?.ownerDocument?.defaultView||window.parent||window,root=host.document.getElementById('muchi-explore-v154');if(root?.classList.contains('open'))host.MuchiTutorial?.start?.('explore-panel',{root,title:'现场探索',steps:[{target:'.me-side',title:'选择搜索区域',text:'这一排是当前地点的具体搜索区域。手机上左右滑动；深色卡片是普通区域，描边高亮表示当前选中。'},{target:'.me-privacy',title:'临时隐蔽',text:'这里显示当前区域的隐蔽性与可封闭条件。是否停留或采取行动，由你在正文中决定。'},{target:'.me-roundbar',title:'现场行动轮',text:'行动余量只用来限制一次连续搜索的节奏，不是传统战棋。回到正文推进后才会开启新的现场行动轮。'},{target:'.me-actions',title:'搜索深度',text:'快速、仔细、彻底会逐级增加耗时和暴露风险。已经完成的深度不会反复重Roll；世界后续变化则允许“复查现场”。'},{target:'.me-section',title:'结果与待收取',text:'搜到物资后会在下方出现待收取区；真正收进背包后才会进入库存并扣除地点资源。'},{target:'.me-close',title:'关闭探索',text:'可以随时关闭。关闭本身不会刷新行动点，也不会让已经搜索过的内容重置。'}]})},220);
try{eventOn(getButtonEvent('现场探索'),__muchiExploreTourOnly)}catch(_){ }

