document.body.append( createLinkParentElement('Google', 'https://google.com') );
document.body.append( createLinkParentElement('Amazon', 'https://amazon.com') );
document.body.append( createLinkParentElement('Optima', 'https://optimaedu.fi') );

function createLinkParentElement(text, href) {
  const linkParent = document.createElement('div');
  linkParent.setAttribute('class', 'link-parent');
  linkParent.append(text + ': ');

  const a = document.createElement('a');
  a.setAttribute('href', href);
  a.append(href);
  linkParent.append(a);

  return linkParent;
}