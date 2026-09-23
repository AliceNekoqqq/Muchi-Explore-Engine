const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../index.js'),'utf8');
const functions=['roundCapacity','roundBlockReason','collect'].map(name=>source.split('\n').find(s=>s.startsWith('function '+name+'(')||s.startsWith('async function '+name+'('))).join('\n');
const ctx={};vm.createContext(ctx);vm.runInContext(functions+'\nglobalThis.api={roundCapacity,roundBlockReason,collect};',ctx);const a=ctx.api;
const state=(stage,san=90,rage=false)=>({沈挽昼:{核心状态:{异化阶段:stage,理智值:san,侵蚀度:85,躁变值:10,是否狂暴:rage,抑制剩余分钟:120}}});
assert.equal(a.roundCapacity(state('深度异化')),1);assert.equal(a.roundBlockReason(state('深度异化')),'');assert.equal(a.roundCapacity(state('深度异化',90,true)),0);assert.ok(a.roundBlockReason(state('深度异化',90,true)));assert.ok(a.roundBlockReason(state('稳定',30)));assert.equal(a.roundBlockReason(state('稳定',31)),'');
(async()=>{await assert.rejects(a.collect('cache','安全屋储备'),/当前携带库存/);await assert.rejects(a.collect('cache','任意键'),/当前携带库存/);console.log('PASS explore: conscious deep infection, active rage, sanity boundary, destination validation')})().catch(e=>{console.error(e);process.exitCode=1});
