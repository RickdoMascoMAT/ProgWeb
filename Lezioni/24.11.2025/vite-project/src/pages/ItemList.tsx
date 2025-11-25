import { useEffect, useState } from 'react';
import type { Item, SkyblockItems } from '../core/models/Items.ts';

//https://transform.tools/json-to-typescript

export default function ItemList() {
  const [Items, setItems] = useState<SkyblockItems>({} as SkyblockItems);
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function getItems() {
    setLoading(true);
    try {
      setCounter(counter => counter + 1);

      const res = await fetch(`https://api.hypixel.net/v2/resources/skyblock/items`);
      if (!res.ok) {
        throw new Error('Errore nel recupero dei Post');
      }

      const data = (await res.json()) as SkyblockItems;
      setItems(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message);
      setItems({success: false, lastUpdated: 0, items: []})
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems({success: false, lastUpdated: 0, items: []});
  }, []);

  if (loading) return <h3>Caricamento in corso...</h3>;
  if (error) return <h3>{error}...</h3>;

  return (
    <div>
      <h1>{counter}</h1>
      <h1>PostList Page</h1>
      <button onClick={getItems}> Update </button>
      {/*{Items.items.length === 0 && <p>Ancora nessun post disponibile</p> }*/}
      <ul>
        {Items.items.map((post: Item) => {
          return <li>{post.name}</li>;
        })}
        {/*{*/}
        {/*    Items.items && <li>{JSON.stringify(Items.items[0])}</li>*/}
        {/*}*/}
      </ul>
    </div>
  );
}
