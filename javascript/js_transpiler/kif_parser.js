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
var kif_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,16],$V2=[12,53],$V3=[8,12,48,50,53],$V4=[1,28],$V5=[1,31],$V6=[1,33],$V7=[1,49],$V8=[1,46],$V9=[1,47],$Va=[1,39],$Vb=[1,42],$Vc=[1,40],$Vd=[1,41],$Ve=[1,50],$Vf=[1,51],$Vg=[1,52],$Vh=[1,38],$Vi=[1,43],$Vj=[1,45],$Vk=[1,48],$Vl=[5,8],$Vm=[1,56],$Vn=[8,48,50,53],$Vo=[1,114];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements_":4,"EOF":5,"top_level_statement":6,"top_level_statements":7,"(":8,"deffunction":9,"IDENTIFIER":10,"parameters":11,")":12,":=":13,"statements":14,"defrelation":15,"statements_":16,"statement":17,"statement_with_semicolon":18,"cond":19,"e":20,"bracket_statements":21,"elif":22,"t":23,"operator":24,"not":25,"or":26,"and":27,"*":28,"/":29,"+":30,"-":31,"comparison_operator":32,">=":33,">":34,"<":35,"equal_exprs":36,"times_exprs":37,"divide_exprs":38,"plus_exprs":39,"minus_exprs":40,"and_exprs":41,"or_exprs":42,"=":43,"=<":44,"implies":45,"forall":46,"function_call":47,"NUMBER":48,"var_name":49,"STRING_LITERAL":50,"parameter":51,"exprs":52,"?":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"(",9:"deffunction",10:"IDENTIFIER",12:")",13:":=",15:"defrelation",19:"cond",23:"t",25:"not",26:"or",27:"and",28:"*",29:"/",30:"+",31:"-",33:">=",34:">",35:"<",43:"=",44:"=<",45:"implies",46:"forall",48:"NUMBER",50:"STRING_LITERAL",53:"?"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,9],[6,9],[16,2],[16,1],[14,1],[17,1],[17,8],[22,5],[22,4],[21,1],[18,1],[24,0],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[32,1],[32,1],[32,1],[36,2],[36,1],[37,2],[37,1],[38,2],[38,1],[39,2],[39,1],[40,2],[40,1],[41,2],[41,1],[42,2],[42,1],[20,5],[20,5],[20,5],[20,5],[20,5],[20,5],[20,5],[20,5],[20,5],[20,5],[20,7],[20,1],[20,1],[20,1],[20,1],[51,1],[11,2],[11,1],[47,3],[47,4],[49,2],[52,2],[52,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 7:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 8: case 59:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["top_level_top_level_statements",$$[$0]]
break;
case 5:
this.$ = ["function","public","Object",$$[$0-6],$$[$0-4],$$[$0-1]]
break;
case 6:
this.$ = ["predicate","Object",$$[$0-6],$$[$0-4],$$[$0-1]]
break;
case 9:
this.$ = ["statements",$$[$0]]
break;
case 10:
this.$ = ["semicolon",$$[$0]]
break;
case 11:
this.$ = ["if",$$[$0-4],$$[$0-3],$$[$0-1]];
break;
case 12:
this.$ = ["elif",$$[$0-3],$$[$0-2],$$[$0]]
break;
case 13:
this.$ = ["else",$$[$0-1]];
break;
case 14:
this.$= ["statements",[$$[$0]]];
break;
case 15:
this.$ = ["return",$$[$0]];
break;
case 17:
this.$ = "!"
break;
case 18:
this.$ = "logic_or";
break;
case 19:
this.$ = "logic_and";
break;
case 28:
this.$ = ["logic_equals",$$[$0-1],$$[$0]]
break;
case 30:
this.$ = ["*",$$[$0-1],$$[$0]]
break;
case 32:
this.$ = ["/",$$[$0-1],$$[$0]]
break;
case 34:
this.$ = ["+",$$[$0-1],$$[$0]]
break;
case 36:
this.$ = ["-",$$[$0-1],$$[$0]]
break;
case 38:
this.$ = ["logic_and",$$[$0-1],$$[$0]]
break;
case 40:
this.$ = ["logic_or",$$[$0-1],$$[$0]]
break;
case 42: case 43: case 44: case 45: case 46: case 48:
this.$ = [$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 47:
this.$ = ["<=",$$[$0-2],$$[$0-1]];
break;
case 49:
this.$ = ["implies",$$[$0-2],$$[$0-1]];
break;
case 50:
this.$ = ["logic_or",$$[$0-2],$$[$0-1]];
break;
case 51:
this.$ = ["logic_and",$$[$0-2],$$[$0-1]];
break;
case 52:
this.$ = ["forall",$$[$0-3],$$[$0-1]];
break;
case 54: case 55: case 56:
this.$ = yytext;
break;
case 57:
this.$ = ["Object", $$[$0]];
break;
case 58: case 63:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 60:
this.$ = ["function_call",$$[$0-1],[]];
break;
case 61:
this.$ = ["function_call",$$[$0-2],$$[$0-1]];
break;
case 62:
this.$ = $$[$0]
break;
case 64:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,8:$V0},{1:[3]},{5:[1,5]},{4:6,5:[2,3],6:3,8:$V0},{9:[1,7],15:[1,8]},{1:[2,1]},{5:[2,2]},{10:[1,9]},{10:[1,10]},{8:[1,11]},{8:[1,12]},{11:13,49:15,51:14,53:$V1},{11:17,49:15,51:14,53:$V1},{12:[1,18],49:15,51:19,53:$V1},o($V2,[2,59]),o($V2,[2,57]),{10:[1,20]},{12:[1,21],49:15,51:19,53:$V1},{13:[1,22]},o($V2,[2,58]),o($V3,[2,62]),{13:[1,23]},{8:$V4,14:24,16:25,17:26,18:27,20:29,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$V4,14:34,16:25,17:26,18:27,20:29,47:30,48:$V5,49:32,50:$V6,53:$V1},{12:[1,35]},{12:[2,9]},{8:$V4,12:[2,8],16:36,17:26,18:27,20:29,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,10]),{10:$V7,19:[1,37],26:$V8,27:$V9,28:$Va,29:$Vb,30:$Vc,31:$Vd,32:44,33:$Ve,34:$Vf,35:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk},o($V3,[2,15]),o($V3,[2,53]),o($V3,[2,54]),o($V3,[2,55]),o($V3,[2,56]),{12:[1,53]},o($Vl,[2,5]),{12:[2,7]},{8:[1,54]},{8:$Vm,20:55,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:57,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:58,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:59,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:60,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:61,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:62,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:63,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:64,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:65,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:[1,66]},{8:$Vm,12:[1,67],20:69,47:30,48:$V5,49:32,50:$V6,52:68,53:$V1},o($Vn,[2,25]),o($Vn,[2,26]),o($Vn,[2,27]),o($Vl,[2,6]),{8:$Vm,20:70,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:72,36:71,47:30,48:$V5,49:32,50:$V6,53:$V1},{10:$V7,26:$V8,27:$V9,28:$Va,29:$Vb,30:$Vc,31:$Vd,32:44,33:$Ve,34:$Vf,35:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk},{8:$Vm,20:74,37:73,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:76,39:75,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:78,40:77,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:80,38:79,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:81,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:82,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:83,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:85,42:84,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:87,41:86,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,20:88,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,60]),{8:$Vm,12:[1,89],20:90,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,64]),{8:$V4,17:92,18:27,20:29,21:91,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vm,12:[1,93],20:94,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,29]),{8:$Vm,12:[1,95],20:96,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,31]),{8:$Vm,12:[1,97],20:98,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,35]),{8:$Vm,12:[1,99],20:100,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,37]),{8:$Vm,12:[1,101],20:102,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,33]),{12:[1,103]},{12:[1,104]},{12:[1,105]},{8:$Vm,12:[1,106],20:107,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,41]),{8:$Vm,12:[1,108],20:109,47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,39]),{12:[1,110]},o($V3,[2,61]),o($V3,[2,63]),{12:[1,111]},{12:[2,14]},o($V3,[2,42]),o($V3,[2,28]),o($V3,[2,43]),o($V3,[2,30]),o($V3,[2,44]),o($V3,[2,34]),o($V3,[2,45]),o($V3,[2,36]),o($V3,[2,46]),o($V3,[2,32]),o($V3,[2,47]),o($V3,[2,48]),o($V3,[2,49]),o($V3,[2,50]),o($V3,[2,40]),o($V3,[2,51]),o($V3,[2,38]),{8:$Vm,20:112,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$Vo,22:113},{12:[1,115]},{12:[1,116]},{8:$Vm,20:117,23:[1,118],47:30,48:$V5,49:32,50:$V6,53:$V1},o($V3,[2,52]),o($V3,[2,11]),{8:$V4,17:92,18:27,20:29,21:119,47:30,48:$V5,49:32,50:$V6,53:$V1},{8:$V4,17:92,18:27,20:29,21:120,47:30,48:$V5,49:32,50:$V6,53:$V1},{12:[1,121]},{12:[1,122]},{8:$Vo,22:123},{12:[2,13]},{12:[2,12]}],
defaultActions: {5:[2,1],6:[2,2],25:[2,9],36:[2,7],92:[2,14],122:[2,13],123:[2,12]},
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
case 1:return 48
break;
case 2:return 50
break;
case 3:return 9
break;
case 4:return 15
break;
case 5:return 46
break;
case 6:return 'assert'
break;
case 7:return 'default'
break;
case 8:return 45
break;
case 9:return 'switch'
break;
case 10:return 25
break;
case 11:return 27
break;
case 12:return 'if'
break;
case 13:return 'then'
break;
case 14:return 'else'
break;
case 15:return 'case'
break;
case 16:return 53
break;
case 17:return 33
break;
case 18:return 34
break;
case 19:return 44
break;
case 20:return 35
break;
case 21:return '=>'
break;
case 22:return '=='
break;
case 23:return 13
break;
case 24:return 43
break;
case 25:return '*='
break;
case 26:return 28
break;
case 27:return '/='
break;
case 28:return 29
break;
case 29:return '-='
break;
case 30:return '--'
break;
case 31:return 31
break;
case 32:return '++'
break;
case 33:return '+='
break;
case 34:return 30
break;
case 35:return '^'
break;
case 36:return '{'
break;
case 37:return '}'
break;
case 38:return '['
break;
case 39:return ']'
break;
case 40:return 8
break;
case 41:return 12
break;
case 42:return 10
break;
case 43:return 5
break;
case 44:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|;+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:deffunction\b)/,/^(?:defrelation\b)/,/^(?:forall\b)/,/^(?:assert\b)/,/^(?:default\b)/,/^(?:implies\b)/,/^(?:switch\b)/,/^(?:not\b)/,/^(?:and\b)/,/^(?:if\b)/,/^(?:then\b)/,/^(?:else\b)/,/^(?:case\b)/,/^(?:\?)/,/^(?:>=)/,/^(?:>)/,/^(?:=<)/,/^(?:<)/,/^(?:=>)/,/^(?:==)/,/^(?::=)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
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
exports.parser = kif_parser;
exports.Parser = kif_parser.Parser;
exports.parse = function () { return kif_parser.parse.apply(kif_parser, arguments); };
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