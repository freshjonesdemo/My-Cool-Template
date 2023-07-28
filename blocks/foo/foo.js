export default async function decorate(block) {
  const bar = document.createElement('div');
  bar.innerHTML = "<div>BAR</div>"
  block.append(bar);
}
