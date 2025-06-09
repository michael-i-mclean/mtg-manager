import axios from 'axios';
import { DataSource } from 'typeorm';
import { Card } from '../cards/cards.entity';

export async function syncCards(dataSource: DataSource) {
  const repo = dataSource.getRepository(Card);
  const response = await axios.get('https://api.scryfall.com/cards/search?q=set:neo');

  const cards = response.data.data;
  for (const card of cards) {
    await repo.save({
      scryfallId: card.id,
      name: card.name,
      set: card.set,
      collectorNumber: card.collector_number,
    });
  }

  console.log(`Synced ${cards.length} cards.`);
}
