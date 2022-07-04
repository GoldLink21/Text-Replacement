const sym = {
    nand:"\u00AC\u2227",
    and:"\u2227",
    xor:"\u2295",
    nor:"\u00AC\u2228",
    or:"\u2228",
    not:"\u00AC",
    all:"\u2200",
    implies:"\u2192",
    ["there exists"]:"\u2203",
    exists:"\u2203",
    bicond:"\u2261"
}

sym['||'] = sym.or;
sym['&&'] = sym.and;
sym["^"] = sym.xor;
sym["!"] = sym.not;
sym["=="] = sym.bicond;
sym["->"] = sym.implies;




/*
sym["\u2261\u2261"] = '\u2263'
sym[".."] = '\u22C5';
sym["\u22C5\u22C5"] = '\u2236';
sym["\u2236\u2236"] = '\u2235';
sym['\u2235\u2235'] = '\u2237';
sym['\u2237\u2237'] = '\u22C6';
sym['\u22C6\u22C6'] = '\u2217';
*/

var e = document.querySelector('textarea');

function compile(){
    for(let name in sym) {
        while(e.value.includes(name)) {
            e.value = e.value.replace(name, sym[name]);
        }
    }
}

e.addEventListener('keypress',compile);
e.addEventListener('keyup',compile);
var helpE = document.getElementById("binds");

document.addEventListener('keydown', e=> {
    if(e.key === "Control")
        helpE.hidden = false;
});
document.addEventListener('keyup', e=>{
    if(e.key === 'Control')
        helpE.hidden = true;
});