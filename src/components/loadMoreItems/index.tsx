import { useState } from 'react';
import { Button } from 'react-native';

export const loadMoreItems = ({ loadMore  }) => {
    const [itemsToShow, setItemsToShow] = useState(10);

    setItemsToShow(itemsToShow + 10);

return (
    <Button onClick={loadMore }>
      Carregar mais Pokémons
    </Button>
  );
};