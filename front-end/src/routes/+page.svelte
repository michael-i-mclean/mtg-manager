<script>
  let decks = [];
  let binders = [];

  // Sample static data; eventually fetch from backend
  decks = [{ name: "Burn", cards: 60 }];
  binders = [{ name: "Trade Binder", cards: 120 }];
</script>

<h1>MTG Manager</h1>

<h2>Decks</h2>
<ul>
  {#each decks as deck}
    <li>{deck.name} ({deck.cards} cards)</li>
  {/each}
</ul>

<h2>Binders</h2>
<ul>
  {#each binders as binder}
    <li>{binder.name} ({binder.cards} cards)</li>
  {/each}
</ul>
