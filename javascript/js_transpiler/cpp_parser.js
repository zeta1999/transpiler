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
var cpp_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,8],$V2=[1,7],$V3=[22,23,29,38,86],$V4=[2,129],$V5=[1,29],$V6=[1,26],$V7=[1,22],$V8=[1,30],$V9=[1,24],$Va=[1,28],$Vb=[1,35],$Vc=[1,43],$Vd=[1,45],$Ve=[1,42],$Vf=[1,44],$Vg=[1,39],$Vh=[1,38],$Vi=[1,40],$Vj=[1,46],$Vk=[1,47],$Vl=[1,48],$Vm=[1,49],$Vn=[1,37],$Vo=[1,41],$Vp=[1,50],$Vq=[8,24,27,29,32,40,67,68,69,70,71,72,73,74,75,86,89,90,91],$Vr=[1,51],$Vs=[1,56],$Vt=[8,24,27,29,32,38,40,67,68,69,70,71,72,73,74,75,79,86,89,90,91,95],$Vu=[24,40],$Vv=[24,40,86],$Vw=[1,83],$Vx=[1,90],$Vy=[8,24,32,40,69,70,86,89],$Vz=[8,24,32,40,67,68,69,70,71,86,89,90],$VA=[8,24,27,29,32,40,67,68,69,70,71,86,89,90],$VB=[8,24,27,29,32,40,67,68,69,70,71,72,73,86,89,90],$VC=[8,24,27,29,32,40,67,68,69,70,71,72,73,74,75,79,86,89,90,91],$VD=[1,114],$VE=[24,86];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statements_with_vars":6,"initialize_var_":7,";":8,"statements_without_vars":9,"statement":10,"initialize_vars":11,"initialize_var":12,"class_statements":13,"class_statements_":14,"statements":15,"class_statement":16,"access_modifier":17,"public":18,"private":19,"class_":20,"namespace":21,"IDENTIFIER":22,"{":23,"}":24,"class":25,"template":26,"<":27,"type_params":28,">":29,"enum":30,"identifiers":31,":":32,"implements":33,"top_level_statement":34,"initialize_var1":35,"top_level_statements":36,"type":37,"(":38,"parameters":39,")":40,"statement_with_semicolon":41,"while":42,"e":43,"bracket_statements":44,"do":45,"switch":46,"case_statements":47,"for":48,"statement_with_semicolon_":49,"if":50,"elif":51,"case_statement":52,"case":53,"break":54,"case_statements_":55,"default":56,"=":57,"static":58,"operator":59,"OPERATOR":60,"+=":61,"-=":62,"*=":63,"/=":64,"++":65,"--":66,"<=":67,">=":68,"&&":69,"||":70,"==":71,"+":72,"-":73,"*":74,"/":75,"return":76,"const":77,"access_array":78,".":79,"dot_expr":80,"function_call":81,"cout":82,"parentheses_expr":83,"exprs":84,"key_values":85,",":86,"key_value":87,"STRING_LITERAL":88,"?":89,"!=":90,"%":91,"initializer_list":92,"[":93,"access_arr":94,"]":95,"new":96,"Dictionary":97,"NUMBER":98,"types":99,"Object":100,"parameter":101,"&":102,"...":103,"expr":104,"type_param":105,"typename":106,"else":107,"add":108,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"statements_with_vars",8:";",18:"public",19:"private",21:"namespace",22:"IDENTIFIER",23:"{",24:"}",25:"class",26:"template",27:"<",29:">",30:"enum",32:":",33:"implements",38:"(",40:")",42:"while",45:"do",46:"switch",48:"for",50:"if",53:"case",54:"break",56:"default",57:"=",58:"static",59:"operator",61:"+=",62:"-=",63:"*=",64:"/=",65:"++",66:"--",67:"<=",68:">=",69:"&&",70:"||",71:"==",72:"+",73:"-",74:"*",75:"/",76:"return",77:"const",79:".",81:"function_call",82:"cout",86:",",88:"STRING_LITERAL",89:"?",90:"!=",91:"%",93:"[",95:"]",96:"new",97:"Dictionary",98:"NUMBER",100:"Object",102:"&",103:"...",106:"typename",107:"else"},
productions_: [0,[3,2],[4,1],[4,2],[4,3],[9,2],[9,1],[11,3],[11,1],[13,1],[15,1],[14,2],[14,1],[17,1],[17,1],[20,5],[20,6],[20,8],[20,5],[20,8],[20,7],[34,1],[34,2],[36,2],[36,1],[10,12],[10,2],[10,1],[10,5],[10,7],[10,7],[10,9],[10,8],[10,6],[10,5],[10,8],[49,1],[49,1],[52,6],[55,2],[55,1],[47,4],[47,1],[16,5],[16,3],[16,6],[16,8],[16,7],[16,9],[16,8],[16,9],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[41,2],[41,5],[41,3],[41,2],[41,3],[41,3],[41,2],[41,2],[41,3],[41,3],[41,3],[41,3],[41,3],[41,1],[41,4],[41,7],[35,1],[12,1],[7,6],[7,4],[85,3],[85,1],[87,5],[43,5],[43,3],[43,3],[43,3],[43,3],[43,3],[43,3],[43,3],[43,3],[43,4],[43,4],[43,3],[43,3],[43,3],[43,3],[43,3],[43,1],[43,2],[43,1],[80,3],[80,3],[80,1],[78,4],[92,4],[92,5],[92,4],[92,5],[83,3],[83,10],[83,1],[83,3],[83,4],[83,1],[83,1],[83,1],[37,3],[37,4],[37,1],[37,1],[37,1],[101,3],[101,3],[101,4],[101,2],[101,3],[39,3],[39,1],[39,0],[94,3],[94,1],[84,3],[84,1],[104,2],[104,1],[99,3],[99,1],[28,3],[28,1],[105,2],[105,2],[51,7],[51,2],[31,3],[31,1],[108,3],[108,1],[44,3],[44,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 3:
this.$ = [["semicolon",["initialize_var"].concat($$[$0-1])]]
break;
case 4:
this.$ = [["lexically_scoped_vars",[["lexically_scoped_var"].concat($$[$0-2])],$$[$0]]]
break;
case 5: case 11: case 39:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 6: case 8: case 12: case 24: case 40: case 112: case 137: case 140:
this.$ =
 [$$[$0]];
break;
case 7: case 88:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 9:
this.$ = ["class_statements",$$[$0]]
break;
case 10:
this.$ = ["statements",$$[$0]]
break;
case 15:
this.$ = [$$[$0-4],"public",$$[$0-3],$$[$0-1]];
break;
case 16:
this.$ = [$$[$0-5],"public",$$[$0-4],$$[$0-2]];
break;
case 17:
this.$ = ["generic_class","public",$$[$0-3],$$[$0-1],$$[$0-5]];
break;
case 18:
this.$ = ["enum",$$[$0-4],"public",$$[$0-3],$$[$0-1]];
break;
case 19:
this.$ = ["class_extends","public",$$[$0-6],$$[$0-3],$$[$0-1]];
break;
case 20:
this.$ = ["class_implements","public",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 22:
this.$ = ["semicolon",$$[$0-1]]
break;
case 23:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 25:
this.$ = ["generic_function","public",$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-1],$$[$0-9]];
break;
case 26: case 158:
this.$ = ["semicolon",$$[$0-1]];
break;
case 28:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 29:
this.$ = ["do_while",$$[$0-5],$$[$0-2]];
break;
case 30:
this.$ = ["switch",$$[$0-4],$$[$0-1]];
break;
case 31:
this.$ = ["for",$$[$0-6],$$[$0-4],$$[$0-2],$$[$0]];
break;
case 32:
this.$ = ["foreach",$$[$0-5],$$[$0-4],$$[$0-2],$$[$0]];
break;
case 33:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 34:
this.$ = ["if",$$[$0-2],$$[$0]];
break;
case 35:
this.$ = ["function","public",$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 38:
this.$ = ["case",$$[$0-4],$$[$0-2]]
break;
case 41:
this.$ = $$[$0-3].concat([["default",$$[$0]]])
break;
case 43:
this.$ = ["initialize_instance_var_with_value","public",$$[$0-4],$$[$0-3],$$[$0-1]];
break;
case 44:
this.$ = ["initialize_instance_var","public",$$[$0-2],$$[$0-1]];
break;
case 45:
this.$ = ["initialize_static_instance_var","public",$$[$0-4],$$[$0-3],$$[$0-1]];
break;
case 46:
this.$ = ["interface_static_method",$$[$0-7],$$[$0-5],$$[$0-4],$$[$0-2]];
break;
case 47:
this.$ = ["interface_instance_method",$$[$0-6],$$[$0-5],$$[$0-4],$$[$0-2]];
break;
case 48:
this.$ = ["static_method","public",$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 49:
this.$ = ["instance_method","public",$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 50:
this.$ = ["static_overload_operator","public",$$[$0-8],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 68:
this.$ = ["return",$$[$0]];
break;
case 69:
this.$ = ["initialize_constant",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 70:
this.$ = ["initialize_empty_constants",$$[$0-1],$$[$0]];
break;
case 71:
this.$ = ["initialize_empty_vars",$$[$0-1],$$[$0]];
break;
case 72: case 73:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 74: case 75:
this.$ = [$$[$0],$$[$0-1]];
break;
case 76: case 77: case 78: case 79: case 92: case 93: case 94: case 95: case 96: case 97: case 98: case 99: case 102: case 103: case 104: case 105: case 106:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 80:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 82: case 101:
this.$ = ["<<",$$[$0-3],$$[$0]];
break;
case 83:
this.$ = ["<<",["<<",$$[$0-6],$$[$0-3]],$$[$0]];
break;
case 84:
this.$ = ["initialize_var"].concat($$[$0]);
break;
case 85:
this.$ = ["lexically_scoped_var"].concat($$[$0]);
break;
case 86:
this.$ = [$$[$0-5],$$[$0-4],["initializer_list",$$[$0-5],$$[$0-1]]]
break;
case 87:
this.$ = [$$[$0-3],$$[$0-2],$$[$0]];
break;
case 89: case 142: case 144: case 146: case 148: case 154: case 156:
this.$ = [$$[$0]];
break;
case 90: case 127:
this.$ = [$$[$0-3],$$[$0-1]]
break;
case 91:
this.$ = ["ternary_operator",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 100:
this.$ = [">>",$$[$0-3],$$[$0]];
break;
case 108:
this.$ = ["-",$$[$0]];
break;
case 109:
this.$ = [".", $$[$0]];
break;
case 110: case 111: case 136: case 139: case 141: case 145: case 147: case 153: case 155:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 113:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 114:
this.$ = ["initializer_list",$$[$0-2],[]];
break;
case 115:
this.$ = ["initializer_list",$$[$0-3],$$[$0-1]];
break;
case 116:
this.$ = [$$[$0-3],$$[$0-2],[]];
break;
case 117:
this.$ = [$$[$0-4],$$[$0-3],$$[$0-1]];
break;
case 118: case 157:
this.$= $$[$0-1];
break;
case 119:
this.$ = ["associative_array",$$[$0-6],$$[$0-4],$$[$0-1]]
break;
case 121:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 122:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 123: case 124: case 125:
this.$ = yytext;
break;
case 126:
this.$ = [$$[$0-2],"[]"];
break;
case 131:
this.$ = ["ref_parameter",$$[$0-2],$$[$0]]
break;
case 132:
this.$ = ["varargs",$$[$0-2],$$[$0]]
break;
case 133:
this.$ = ["optional_arg",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 134:
this.$ = [$$[$0-1],$$[$0]];
break;
case 135:
this.$=["final_parameter",$$[$0-1],$$[$0]]
break;
case 138:
this.$= []
break;
case 143:
this.$ = ["function_call_ref",$$[$0]];
break;
case 149: case 150:
this.$ = $$[$0];
break;
case 151:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 152:
this.$ = ["else",$$[$0]];
break;
}
},
table: [{3:1,4:2,6:[1,3],7:4,22:$V0,37:5,97:$V1,100:$V2},{1:[3]},{5:[1,9]},{5:[2,2]},{8:[1,10]},{22:[1,11]},o($V3,[2,130],{27:[1,13],93:[1,12]}),o($V3,[2,128]),o([22,29,86],$V4),{1:[2,1]},{5:[2,3],6:[1,14]},{57:[1,15]},{95:[1,16]},{22:$V0,37:18,97:$V1,99:17,100:$V2},{5:[2,4]},{22:$V5,23:[1,19],38:$V6,43:20,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},o($V3,[2,126]),{29:[1,31]},{29:[2,146],86:[1,32]},{22:$V5,38:$V6,43:36,73:$V7,78:27,80:23,83:25,84:33,88:$V8,92:21,96:$V9,98:$Va,102:$Vb,104:34},{8:[2,87],27:$Vc,29:$Vd,67:$Ve,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,89:$Vn,90:$Vo,91:$Vp},o($Vq,[2,107],{79:$Vr}),{22:$V5,38:$V6,43:52,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},o($Vq,[2,109]),{22:$V0,37:53,97:[1,54],100:$V2},o($Vq,[2,112],{38:$Vs,79:[1,55]}),{22:$V5,38:$V6,43:57,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},o($Vt,[2,120]),o($Vt,[2,123]),o($Vt,[2,124],{93:[1,58]}),o($Vt,[2,125]),o($V3,[2,127]),{22:$V0,37:18,97:$V1,99:59,100:$V2},{24:[1,60]},o($Vu,[2,142],{86:[1,61]}),{22:$V5,38:$V6,43:62,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},o($Vv,[2,144],{27:$Vc,29:$Vd,67:$Ve,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,89:$Vn,90:$Vo,91:$Vp}),{22:$V5,38:$V6,43:63,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:64,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:65,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:66,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:67,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:68,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,27:[1,70],38:$V6,43:69,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:71,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,29:[1,73],38:$V6,43:72,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:74,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:75,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:76,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:77,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,43:78,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{22:$V5,38:$V6,78:27,80:79,83:25,88:$V8,92:80,96:$V9,98:$Va},o($Vq,[2,108]),{23:[1,81],38:[1,82]},o([23,38],$V4,{27:$Vw}),{22:$V5,38:$V6,78:27,80:84,83:25,88:$V8,92:80,96:$V9,98:$Va},{22:$V5,38:$V6,40:[1,85],43:36,73:$V7,78:27,80:23,83:25,84:86,88:$V8,92:21,96:$V9,98:$Va,102:$Vb,104:34},{27:$Vc,29:$Vd,40:[1,87],67:$Ve,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,89:$Vn,90:$Vo,91:$Vp},{22:$V5,38:$V6,78:27,83:89,88:$V8,94:88,96:$Vx,98:$Va},{29:[2,145]},{8:[2,86]},{22:$V5,38:$V6,43:36,73:$V7,78:27,80:23,83:25,84:91,88:$V8,92:21,96:$V9,98:$Va,102:$Vb,104:34},o($Vv,[2,143],{27:$Vc,29:$Vd,67:$Ve,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,89:$Vn,90:$Vo,91:$Vp}),{27:$Vc,29:$Vd,32:[1,92],67:$Ve,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,89:$Vn,90:$Vo,91:$Vp},o($Vy,[2,92],{27:$Vc,29:$Vd,67:$Ve,68:$Vf,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,90:$Vo,91:$Vp}),o($Vy,[2,93],{27:$Vc,29:$Vd,67:$Ve,68:$Vf,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,90:$Vo,91:$Vp}),o($Vz,[2,94],{27:$Vc,29:$Vd,72:$Vj,73:$Vk,74:$Vl,75:$Vm,91:$Vp}),o($Vz,[2,95],{27:$Vc,29:$Vd,72:$Vj,73:$Vk,74:$Vl,75:$Vm,91:$Vp}),o($Vz,[2,96],{27:$Vc,29:$Vd,72:$Vj,73:$Vk,74:$Vl,75:$Vm,91:$Vp}),o($VA,[2,97],{72:$Vj,73:$Vk,74:$Vl,75:$Vm,91:$Vp}),{22:$V5,38:$V6,43:93,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},o($Vz,[2,98],{27:$Vc,29:$Vd,72:$Vj,73:$Vk,74:$Vl,75:$Vm,91:$Vp}),o($VA,[2,99],{72:$Vj,73:$Vk,74:$Vl,75:$Vm,91:$Vp}),{22:$V5,38:$V6,43:94,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},o($VB,[2,102],{74:$Vl,75:$Vm,91:$Vp}),o($VB,[2,103],{74:$Vl,75:$Vm,91:$Vp}),o($Vq,[2,104]),o($Vq,[2,105]),o($Vq,[2,106]),o($Vq,[2,110]),{79:$Vr},{22:$V5,24:[1,95],38:$V6,43:36,73:$V7,78:27,80:23,83:25,84:96,88:$V8,92:21,96:$V9,98:$Va,102:$Vb,104:34},{22:$V5,38:$V6,40:[1,97],43:36,73:$V7,78:27,80:23,83:25,84:98,88:$V8,92:21,96:$V9,98:$Va,102:$Vb,104:34},{22:$V0,37:99,97:$V1,100:$V2},o($Vq,[2,111]),o($Vt,[2,121]),{40:[1,100]},o($Vt,[2,118]),{95:[1,101]},{38:$Vs,86:[1,102],95:[2,140]},{97:[1,103]},o($Vu,[2,141]),{22:$V5,38:$V6,43:104,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},o($VA,[2,101],{72:$Vj,73:$Vk,74:$Vl,75:$Vm,91:$Vp}),o($VA,[2,100],{72:$Vj,73:$Vk,74:$Vl,75:$Vm,91:$Vp}),o($VC,[2,114]),{24:[1,105]},o($VC,[2,116]),{40:[1,106]},{86:[1,107]},o($Vt,[2,122]),o($Vt,[2,113]),{22:$V5,38:$V6,78:27,83:89,88:$V8,94:108,96:$Vx,98:$Va},{27:$Vw},o([8,24,32,40,86],[2,91],{27:$Vc,29:$Vd,67:$Ve,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,89:$Vn,90:$Vo,91:$Vp}),o($VC,[2,115]),o($VC,[2,117]),{22:$V0,37:109,97:$V1,100:$V2},{95:[2,139]},{29:[1,110]},{23:[1,111]},{23:$VD,85:112,87:113},{24:[1,115],86:[1,116]},o($VE,[2,89]),{88:[1,117]},o($Vt,[2,119]),{23:$VD,87:118},{86:[1,119]},o($VE,[2,88]),{22:$V5,38:$V6,43:120,73:$V7,78:27,80:23,83:25,88:$V8,92:21,96:$V9,98:$Va},{24:[1,121],27:$Vc,29:$Vd,67:$Ve,68:$Vf,69:$Vg,70:$Vh,71:$Vi,72:$Vj,73:$Vk,74:$Vl,75:$Vm,89:$Vn,90:$Vo,91:$Vp},o($VE,[2,90])],
defaultActions: {3:[2,2],9:[2,1],14:[2,4],59:[2,145],60:[2,86],108:[2,139]},
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
case 0:/* skip whitespace and line comments */
break;
case 1:return 98
break;
case 2:return 88
break;
case 3:return "typename"
break;
case 4:return "template"
break;
case 5:return "class"
break;
case 6:return "cout"
break;
case 7:return "switch"
break;
case 8:return 53
break;
case 9:return "break"
break;
case 10:return 56
break;
case 11:return "public"
break;
case 12:return "extends"
break;
case 13:return "operator"
break;
case 14:return "implements"
break;
case 15:return "Dictionary"
break;
case 16:return "private"
break;
case 17:return "static"
break;
case 18:return "if"
break;
case 19:return 45
break;
case 20:return "in"
break;
case 21:return "else"
break;
case 22:return "return"
break;
case 23:return "while"
break;
case 24:return "foreach"
break;
case 25:return "const"
break;
case 26:return "for"
break;
case 27:return "new"
break;
case 28:return 86
break;
case 29:return 8
break;
case 30:return 79
break;
case 31:return 32
break;
case 32:return 90
break;
case 33:return '!'
break;
case 34:return 69
break;
case 35:return 102
break;
case 36:return 70
break;
case 37:return '>>'
break;
case 38:return 68
break;
case 39:return 29
break;
case 40:return 67
break;
case 41:return 27
break;
case 42:return 71
break;
case 43:return 57
break;
case 44:return 63
break;
case 45:return 74
break;
case 46:return 64
break;
case 47:return 75
break;
case 48:return 91
break;
case 49:return 62
break;
case 50:return 66
break;
case 51:return 73
break;
case 52:return 65
break;
case 53:return 61
break;
case 54:return 72
break;
case 55:return '^'
break;
case 56:return 89
break;
case 57:return 23
break;
case 58:return 24
break;
case 59:return 93
break;
case 60:return 95
break;
case 61:return 38
break;
case 62:return 40
break;
case 63:return 22
break;
case 64:return 5
break;
case 65:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|\/\/+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:typename\b)/,/^(?:template\b)/,/^(?:class\b)/,/^(?:cout\b)/,/^(?:switch\b)/,/^(?:case\b)/,/^(?:break\b)/,/^(?:default\b)/,/^(?:public\b)/,/^(?:extends\b)/,/^(?:operator\b)/,/^(?:implements\b)/,/^(?:Dictionary\b)/,/^(?:private\b)/,/^(?:static\b)/,/^(?:if\b)/,/^(?:do\b)/,/^(?:in\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:foreach\b)/,/^(?:const\b)/,/^(?:for\b)/,/^(?:new\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:!=)/,/^(?:!)/,/^(?:&&)/,/^(?:&)/,/^(?:\|\|)/,/^(?:>>)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\?)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65],"inclusive":true}}
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
exports.parser = cpp_parser;
exports.Parser = cpp_parser.Parser;
exports.parse = function () { return cpp_parser.parse.apply(cpp_parser, arguments); };
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