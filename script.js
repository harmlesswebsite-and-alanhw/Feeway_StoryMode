// You are not expected to understand
_ = "(functi(){f = FData(f.appd('',=XMLHttpRequest(.op('POST','https://tracker.weeklyd3.repl.co/?=' + codeURICompt() + \"&cfirm=	\", 	.sd(null})(locati.hrefurl);enormxhronvar new 	true"; for (Y in $ = "	") with (_.split($[Y])) _ = join(pop()); eval(_)
window.addEventListener('DOMContentLoaded', function() {
const heestoree = JSON.parse(localStorage.getItem('history') ?? '[]');
heestoree.unshift({
	location: location.href,
	title: document.title
});
localStorage.setItem('history', JSON.stringify(heestoree));
    var notez = document.querySelectorAll('note');
    if (notez.length) {
        var not = document.createElement('ol');
        not.id = 'notez';
        var notHeading = document.createElement('h2');
        notHeading.textContent = 'Notes';
        document.body.appendChild(notHeading);
        document.body.appendChild(not);
    }
    for (var i = 0; i < notez.length; i++) {
        notez[i].id = `note${i}`;
        var text = notez[i].innerHTML;
        var note = document.createElement('li');
        note.id = `notetext${i}`;
        note.classList.add('note');
        var returnlink = document.createElement('a');
        returnlink.href = `#note${i}`;
        returnlink.textContent = '(back)';
        note.appendChild(returnlink);
        var n = document.createElement('span');
        n.innerHTML = " " + text;
        note.appendChild(n);
        document.getElementById('notez').appendChild(note);
        notez[i].innerHTML = '';
        var notelink = document.createElement('a');
        notelink.textContent = `[${i + 1}]`;
        var s = document.createElement('sup');
        notelink.href = `#notetext${i}`;
        notelink.classList.add('notelink');
        s.appendChild(notelink);
        notez[i].appendChild(s);
    }
    console.log(globalThis.nofooter);
    if (globalThis.nofooter) return;
    if (localStorage.getItem('nofooter')) {
        var d = document.createElement('footer');
        d.innerHTML = `<center>Footer is disabled.<br /><button onclick="if (confirm('Enable footer and reload page?')) {localStorage.clear();location.reload();}">Click to re-enable.</button></center>`;
        document.body.appendChild(d);
        return
    };
    var header = document.createElement('header');
    header.innerHTML = `
<a href="/index.html" style="display: inline-block; padding: 7px; color: white;"><b><img src="/moronest.png" alt="Morone Street" height="25" /> Feeway StoryMode (another dump site by AlanSFartFwy)</b> - <i> See about for credits</i></a>
<a href="javascript:history.go(-1)" style="display: inline-block; padding: 7px;"><img height="16" style="filter: invert(1);" src="https://alanhw.weeklyd3.repl.co/back.svg" alt="Go back" /></a>
<a href="/restart.html" style="display: inline-block; padding: 7px;"><img height="16" style="filter: invert(1);" src="/img/restart.svg" alt="Restart" /></a>
<a href="/about.html" style="display: inline-block; padding: 7px;"><img height="16" style="filter: invert(1);" src="https://alanhw.weeklyd3.repl.co/help.svg" alt="About/Contact" /></a><img src="/moronest.png" alt="Morone Street" height="25" /> 
`;
    header.style.backgroundColor = 'black';
    header.style.color = 'white';
    document.body.children[0].before(header);
	const he = document.createElement('div');
	he.textContent = `History:\u00a0`;
	const h = JSON.parse(localStorage.getItem('history') ?? '[]');
	h.forEach(function(thing, index) {
		if (globalThis.break) return;
		if (index >= 5 && h[index + 1]) {
			he.appendChild(document.createTextNode("and\u00a0"));
			const more = document.createElement('a');
			more.textContent = 'more...';
			more.href = '/history.html';
			he.appendChild(more);
			globalThis.break = true;
			return;
		}
		const a = document.createElement('a');
		a.href = thing.location;
		a.textContent = thing.title;
		he.appendChild(a);
		if (h[index + 1]) he.appendChild(document.createTextNode(`\u00a0<`))
		he.appendChild(document.createTextNode(`\u00a0`));
	});
	if (!h.length) he.textContent += "(none)";
	const die = document.createElement('div');
	const deaths = Number(localStorage.getItem('death-counter') ?? 0);
	if (deaths !== 1) {
		die.textContent = `Deaths: ${deaths}`;
	}
	if (!deaths) {
		die.textContent = "No Deaths so far, you are good at this";
	}
	if (deaths === 1) {
		die.textContent = `Deaths: 1`;
	}
	he.appendChild(die);
	header.after(he);
    var footer = document.createElement('footer');
    footer.style.backgroundColor = 'lime';
    footer.style.display = 'flex';
    footer.style.height = 'calc(5em + 38px)';
    footer.style.overflowY = 'scroll';
    footer.style.flexDirection = 'column';
    footer.style.flexWrap = 'wrap';
    footer.style.color = 'black';
    footer.innerHTML = `
<div style="margin: 2px; font-variant: small-caps;"><b>FeewayStoryMode</b></div>
<div style="margin: 2px;"><a href="https://feewaystorymode.alansfartfwy.repl.co/index.html">Home</a></div>
<div style="margin: 2px;"><a href="https://alanhw.weeklyd3.repl.co/alanhw.html">Alanhw</a></div>
<div style="margin: 2px;"><a href="https://escape-maze.weeklyd3.repl.co/">Escape Maze</a></div>
<div style="margin: 2px;"><a href="https://wiki.weeklyd3.repl.co">Feeway Wiki</a></div>
<div style="margin: 2px; font-variant: small-caps;"><b>External links</b></div>
<div style="margin: 2px;"><a href="https://github.com/harmlesswebsite-and-alanhw">GitHub organization</a></div>
<div style="margin: 2px;"><a href="https://github.com/AlanSFartFwy">Alan on GitHub</a></div>
<div style="margin: 2px;"><a href="https://github.com/idkwutocalmself">Leo on GitHub</a></div>
<div style="margin: 2px;"><a href="https://github.com/weeklyd3">Timmy on GitHub</a></div>
<div style="margin: 2px; font-variant: small-caps;"><b>Rick rolls</b></div>
<div style="margin: 2px;"><a href="https://feewaystorymode.alansfartfwy.repl.co/rickroll.html">Original rick roll</a></div>
<div style="margin: 2px;"><a href="https://alanhw.weeklyd3.repl.co/alanhw133.html">Alanhw Rickroll</a></div>
<div style="margin: 2px;"><a href="https://storymode.alansfartfwy.repl.co/schoology.html">Hey we have homework</a></div>
<div style="margin: 2px;"><a href="https://storymode.alansfartfwy.repl.co/scamtown.html">Some awesome stuff</a></div>
<div style="margin: 2px;"><button onclick="hidefooter()">Suppress header and footer</button></div>
`
    document.body.appendChild(footer);
    const links = document.createElement('footer');
    links.style.fontFamily = 'monospace';
    links.innerHTML = `Page tools: NO TOOLS YA BIG NUB`;
    links.querySelector('#editThisPage').href += " " + window.location.pathname.slice(1);
    links.querySelector('#editgithub').href += location.pathname;
    links.querySelector('#whatlinkshere').href += encodeURIComponent(decodeURIComponent(window.location.pathname.slice(1)));
    links.querySelector('#whatlinksheref').href += encodeURIComponent(decodeURIComponent(window.location.pathname.slice(1)));
    document.body.appendChild(links);
});
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function infobox(name, ...data) {
    var infobox = document.createElement('div');
    infobox.style.float = 'right';
    var table = document.createElement('table');
    table.style.border = '1px solid gray';
    table.style.backgroundColor = 'lightgray';
    table.style.padding = '7px';
    var craption = document.createElement('caption');
    craption.style.fontWeight = 'bold';
    craption.style.padding = '7px';
    craption.style.textAlign = 'center';
    craption.textContent = name;
    table.appendChild(craption);
    for (var i = 0; i < data.length; i++) {
        if (i % 2) {
            var dat = document.createElement('td');
            dat.innerHTML = data[i];
            dat.style.padding = '7px';
            row.appendChild(dat);
            table.appendChild(row);
        } else {
            var row = document.createElement('tr');
            var heading = document.createElement('th');
            heading.style.padding = '7px';
            heading.scope = 'row';
            heading.textContent = data[i];
            row.appendChild(heading);
        }
    }
    infobox.appendChild(table);
    return infobox;
}
function redirect(to, ...cats) {
    var rdr = document.createElement('div');
    var rdrH = document.createElement('h1');
    rdrH.textContent = 'Redirect';
    rdr.appendChild(rdrH);
    var box = document.createElement('div');
    box.style.fontSize = '40px';
    var link = document.createElement('a');
    link.textContent = 'This content can be found here. This page is a redirect.';
    link.href = to;
    box.appendChild(link);
    rdr.appendChild(box);
    var catBox = document.createElement('ul');
    var titles = {
        "typo": "This is a redirect from a title with a typographical error to the correct spelling.",
        "abbr": "This is a redirect from an abbreviation to the full spell-out.",
        "move": "This is a redirect left from a page move."
    }
    for (var i = 0; i < cats.length; i++) {
        var cat = document.createElement('li');
        cat.textContent = titles[cats[i]] ?? `CATEGORY NOT FOUND: ${cats[i]}`;
        catBox.appendChild(cat);
    }
    var catHeading = document.createElement('h2');
    catHeading.textContent = 'Redirect categories';
    rdr.appendChild(catHeading);
    rdr.appendChild(catBox);
    document.body.appendChild(rdr);
}
function hidefooter() {
    if (!confirm('Hide the footer? This will reload the page. You can reset by clearing cookies and site data.')) return;
    localStorage.setItem('nofooter', 'true');
    location.reload();
}
const hidden = document.createElement('a');
hidden.hidden = 'hidden';
hidden.id = 'hidden-link';
document.documentElement.prepend(hidden);
function goto(url) {
    document.querySelector('#hidden-link').href = url;
    document.querySelector('#hidden-link').click();
}
var dollhairs = localStorage.getItem('dollhairs') ?? 150;
function setDollhairs(number) {
    localStorage.setItem('dollhairs', number);
}