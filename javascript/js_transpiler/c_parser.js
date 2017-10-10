/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var c_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,6],$V2=[1,7],$V3=[1,10],$V4=[1,11],$V5=[1,12],$V6=[1,14],$V7=[5,17],$V8=[5,12,17,20,23,25,27,29,67],$V9=[2,53],$Va=[1,40],$Vb=[1,38],$Vc=[1,37],$Vd=[1,31],$Ve=[1,33],$Vf=[1,39],$Vg=[1,41],$Vh=[1,43],$Vi=[1,47],$Vj=[1,51],$Vk=[15,19],$Vl=[1,60],$Vm=[1,61],$Vn=[1,62],$Vo=[1,63],$Vp=[1,64],$Vq=[1,65],$Vr=[1,66],$Vs=[1,67],$Vt=[1,68],$Vu=[1,69],$Vv=[1,70],$Vw=[1,71],$Vx=[15,17,19,26,38,39,40,41,42,43,44,45,46,47,48,49],$Vy=[1,75],$Vz=[13,15,17,19,26,38,39,40,41,42,43,44,45,46,47,48,49,54,57,63],$VA=[1,88],$VB=[2,58],$VC=[1,86],$VD=[15,17],$VE=[1,121],$VF=[15,17,19,26,38,39,40,41,42,43,44,45],$VG=[15,17,19,26,38,39,40,41,42,43,44,45,46,47],$VH=[1,137],$VI=[5,12,17,20,23,25,27,29,66,67];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"access_modifier":8,"public":9,"private":10,"type":11,"IDENTIFIER":12,"(":13,"parameters":14,")":15,"{":16,"}":17,"statement_with_semicolon":18,";":19,"while":20,"e":21,"bracket_statements":22,"for":23,"if_statement":24,"printf":25,",":26,"return":27,"=":28,"var":29,"identifiers":30,"access_array":31,"++":32,"--":33,"+=":34,"-=":35,"*=":36,"/=":37,"||":38,"&&":39,"<=":40,"<":41,">=":42,">":43,"==":44,"!=":45,"+":46,"-":47,"*":48,"/":49,"not_expr":50,"!":51,"dot_expr":52,"parentheses_expr":53,".":54,"[":55,"access_arr":56,"]":57,"exprs":58,"NUMBER":59,"STRING_LITERAL":60,"parameter":61,"void":62,"][":63,"types":64,"elif":65,"else":66,"if":67,"else_statement":68,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"public",10:"private",12:"IDENTIFIER",13:"(",15:")",16:"{",17:"}",19:";",20:"while",23:"for",25:"printf",26:",",27:"return",28:"=",29:"var",32:"++",33:"--",34:"+=",35:"-=",36:"*=",37:"/=",38:"||",39:"&&",40:"<=",41:"<",42:">=",43:">",44:"==",45:"!=",46:"+",47:"-",48:"*",49:"/",51:"!",54:".",55:"[",57:"]",59:"NUMBER",60:"STRING_LITERAL",62:"void",63:"][",66:"else",67:"if"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[8,1],[8,1],[6,8],[6,2],[6,5],[6,9],[6,1],[18,6],[18,2],[18,4],[18,2],[18,3],[18,3],[18,2],[18,2],[18,3],[18,3],[18,3],[18,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,2],[21,1],[50,2],[50,1],[52,3],[52,1],[31,4],[53,1],[53,3],[53,4],[53,2],[53,3],[53,3],[53,1],[53,1],[53,1],[11,3],[11,1],[61,2],[14,3],[14,1],[14,1],[14,0],[56,3],[56,1],[58,3],[58,1],[64,3],[64,1],[65,7],[65,6],[65,1],[68,2],[24,6],[24,5],[30,3],[30,1],[22,3],[22,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 41: case 56: case 60:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 7:
this.$ = ["function","public",$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 8: case 74:
this.$ = ["semicolon",$$[$0-1]];
break;
case 9:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 10:
this.$ = ["for",$$[$0-6],$$[$0-4],$$[$0-2],$$[$0]];
break;
case 12:
this.$ = ["println",$$[$0-1]];
break;
case 13:
this.$ = ["return",$$[$0]];
break;
case 14:
this.$ = ["initialize_var",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 15:
this.$ = ["initialize_empty_vars","Object",$$[$0]];
break;
case 16: case 17:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 18: case 19:
this.$ = [$$[$0],$$[$0-1]];
break;
case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 34: case 35:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 33:
this.$ = ["-",$$[$0-2],$$[$0]];
break;
case 36:
this.$ = ["-",$$[$0]];
break;
case 38:
this.$ = ["!", [".",$$[$0]]];
break;
case 39:
this.$ = [".", $$[$0]];
break;
case 40: case 55: case 59: case 61: case 63: case 71:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 42:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 44:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 45:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 46:
this.$ = ["initializer_list","Object",[]];
break;
case 47:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 48:
this.$ = $$[$0-1];
break;
case 49: case 50: case 51:
this.$ = yytext;
break;
case 52:
this.$ = [$$[$0-2],"[]"];
break;
case 54:
this.$ = [$$[$0-1],$$[$0]];
break;
case 57: case 58:
this.$ = [];
break;
case 62: case 64: case 72:
this.$ = [$$[$0]];
break;
case 65:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 66:
this.$ = ["elif",$$[$0-2],$$[$0]]
break;
case 68:
this.$ = ["else",$$[$0]];
break;
case 69:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 70:
this.$ = ["if",$$[$0-2],$$[$0-1]];
break;
case 73:
this.$= $$[$0-1];
break;
}
},
table: [{3:1,4:2,6:3,11:4,12:$V0,18:5,20:$V1,23:$V2,24:8,25:$V3,27:$V4,29:$V5,31:13,67:$V6},{1:[3]},{5:[1,15]},o($V7,[2,3],{6:3,11:4,18:5,24:8,31:13,4:16,12:$V0,20:$V1,23:$V2,25:$V3,27:$V4,29:$V5,67:$V6}),{12:[1,17]},{19:[1,18]},{13:[1,19]},{13:[1,20]},o($V8,[2,11]),{12:$V9,28:[1,22],32:[1,23],33:[1,24],34:[1,25],35:[1,26],36:[1,27],37:[1,28],55:[1,21]},{13:[1,29]},{12:$Va,13:$Vb,16:$Vc,21:30,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Vh,30:42},{28:[1,44]},{13:[1,45]},{1:[2,1]},o($V7,[2,2]),{13:[1,46],28:$Vi},o($V8,[2,8]),{12:$Va,13:$Vb,16:$Vc,21:48,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{11:50,12:$V0,18:49,25:$V3,27:$V4,29:$V5,31:13},{12:$Va,13:$Vb,16:$Vc,31:36,53:53,56:52,57:$Vj,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:54,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},o($Vk,[2,18]),o($Vk,[2,19]),{12:$Va,13:$Vb,16:$Vc,21:55,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:56,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:57,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:58,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:59,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},o($Vk,[2,13],{38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),{12:$Va,13:$Vb,16:$Vc,21:72,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},o($Vx,[2,37]),{12:$Va,13:$Vb,16:$Vc,31:36,52:73,53:35,59:$Vf,60:$Vg},o($Vx,[2,39]),o($Vx,[2,41],{13:$Vy,54:[1,74]}),o($Vz,[2,43]),{12:$Va,13:$Vb,16:$Vc,17:[1,76],21:78,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,58:77,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:79,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},o($Vz,[2,49]),o($Vz,[2,50],{55:[1,80]}),o($Vz,[2,51]),o($Vk,[2,15]),o($Vk,[2,72],{26:[1,81]}),{12:$Va,13:$Vb,16:$Vc,21:82,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:83,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{11:87,12:$VA,14:84,15:$VB,61:85,62:$VC},{12:$Va,13:$Vb,16:$Vc,21:89,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{15:[1,90],38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{19:[1,91]},{12:[1,92]},{12:[2,52]},{57:[1,93]},{13:$Vy,57:[2,60],63:[1,94]},o($Vk,[2,17],{38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($Vk,[2,20],{38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($Vk,[2,21],{38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($Vk,[2,22],{38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($Vk,[2,23],{38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),{26:[1,95],38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{12:$Va,13:$Vb,16:$Vc,21:96,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:97,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:98,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:99,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:100,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:101,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:102,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:103,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:104,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:105,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:106,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:107,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},o($Vx,[2,36]),o($Vx,[2,38]),{12:$Va,13:$Vb,16:$Vc,31:36,52:108,53:35,59:$Vf,60:$Vg},{12:$Va,13:$Vb,15:[1,109],16:$Vc,21:78,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,58:110,59:$Vf,60:$Vg},o($Vz,[2,46]),{17:[1,111]},o($VD,[2,62],{26:[1,112],38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),{15:[1,113],38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{12:$Va,13:$Vb,16:$Vc,31:36,53:53,56:52,59:$Vf,60:$Vg},{12:$Vh,30:114},o($Vk,[2,16],{38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),{15:[1,115],38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{15:[1,116]},{15:[2,56],26:[1,117]},{15:[2,57]},{12:[1,118]},{12:$V9,55:[1,119]},o($Vk,[2,14],{38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),{11:50,12:$V0,16:$VE,18:122,22:120,25:$V3,27:$V4,29:$V5,31:13},{12:$Va,13:$Vb,16:$Vc,21:123,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},{28:$Vi},o([13,15,17,19,26,28,38,39,40,41,42,43,44,45,46,47,48,49,54,57,63],[2,42]),{12:$Va,13:$Vb,16:$Vc,31:36,53:53,56:124,59:$Vf,60:$Vg},{12:$Va,13:$Vb,16:$Vc,21:125,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},o([15,17,19,26,38],[2,24],{39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o([15,17,19,26,38,39],[2,25],{40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($VF,[2,26],{46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($VF,[2,27],{46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($VF,[2,28],{46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($VF,[2,29],{46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($VF,[2,30],{46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($VF,[2,31],{46:$Vt,47:$Vu,48:$Vv,49:$Vw}),o($VG,[2,32],{48:$Vv,49:$Vw}),o($VG,[2,33],{48:$Vv,49:$Vw}),o($Vx,[2,34]),o($Vx,[2,35]),o($Vx,[2,40]),o($Vz,[2,44]),{15:[1,126]},o($Vz,[2,47]),{12:$Va,13:$Vb,16:$Vc,21:78,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,58:127,59:$Vf,60:$Vg},o($Vz,[2,48]),o($Vk,[2,71]),{11:50,12:$V0,16:$VE,18:122,22:128,25:$V3,27:$V4,29:$V5,31:13},{16:[1,129]},{11:87,12:$VA,14:130,15:$VB,61:85,62:$VC},o([15,26],[2,54]),{57:$Vj},o($V8,[2,9]),{4:132,6:3,7:131,11:4,12:$V0,18:5,20:$V1,23:$V2,24:8,25:$V3,27:$V4,29:$V5,31:13,67:$V6},{19:[1,133]},{19:[1,134],38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{57:[2,59]},{15:[1,135],38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},o($Vz,[2,45]),o($VD,[2,61]),o($V8,[2,70],{65:136,68:138,66:$VH}),{4:132,6:3,7:139,11:4,12:$V0,18:5,20:$V1,23:$V2,24:8,25:$V3,27:$V4,29:$V5,31:13,67:$V6},{15:[2,55]},{17:[1,140]},{17:[2,4]},o($VI,[2,74]),{11:50,12:$V0,18:141,25:$V3,27:$V4,29:$V5,31:13},o($Vk,[2,12]),o($V8,[2,69]),{11:50,12:$V0,16:$VE,18:122,22:143,25:$V3,27:$V4,29:$V5,31:13,67:[1,142]},o($V8,[2,67]),{17:[1,144]},o($VI,[2,73]),{15:[1,145]},{13:[1,146]},o($V8,[2,68]),o($V8,[2,7]),{11:50,12:$V0,16:$VE,18:122,22:147,25:$V3,27:$V4,29:$V5,31:13},{12:$Va,13:$Vb,16:$Vc,21:148,31:36,47:$Vd,50:32,51:$Ve,52:34,53:35,59:$Vf,60:$Vg},o($V8,[2,10]),{15:[1,149],38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{11:50,12:$V0,16:$VE,18:122,22:150,25:$V3,27:$V4,29:$V5,31:13},o($V8,[2,66],{68:138,65:151,66:$VH}),o($V8,[2,65])],
defaultActions: {15:[2,1],51:[2,52],86:[2,57],124:[2,59],130:[2,55],132:[2,4]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 59
break;
case 2:return 60
break;
case 3:return "if"
break;
case 4:return "else"
break;
case 5:return "return"
break;
case 6:return "void"
break;
case 7:return "printf"
break;
case 8:return "while"
break;
case 9:return "for"
break;
case 10:return 26
break;
case 11:return 19
break;
case 12:return 54
break;
case 13:return ':'
break;
case 14:return 39
break;
case 15:return 38
break;
case 16:return 45
break;
case 17:return 51
break;
case 18:return 42
break;
case 19:return 43
break;
case 20:return 40
break;
case 21:return 41
break;
case 22:return 44
break;
case 23:return 28
break;
case 24:return 36
break;
case 25:return 48
break;
case 26:return 37
break;
case 27:return 49
break;
case 28:return 35
break;
case 29:return 33
break;
case 30:return 47
break;
case 31:return 32
break;
case 32:return 34
break;
case 33:return 46
break;
case 34:return '^'
break;
case 35:return 16
break;
case 36:return 17
break;
case 37:return 63
break;
case 38:return 55
break;
case 39:return 57
break;
case 40:return 13
break;
case 41:return 15
break;
case 42:return 12
break;
case 43:return 5
break;
case 44:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:void\b)/,/^(?:printf\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!=)/,/^(?:!)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = c_parser;
exports.Parser = c_parser.Parser;
exports.parse = function () { return c_parser.parse.apply(c_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}