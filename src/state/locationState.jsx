import { signal } from "@preact/signals";

function location() {
  const planets = signal([
    {earth: signal("Hi i'm Earth"),
    mars: signal(12),
    venus: signal(8)}
  ]);
  
  const realm = signal(["mortal", "heaven"]);

  return { planets, realm };
}

export default location