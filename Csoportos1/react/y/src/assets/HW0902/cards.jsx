import Card from "./Card.jsx";


const cardData = [
    {
      id: 1,
      title: 'Designed Card Title 1',
      text: 'This is a designed card component. It includes various elements.',
      imageUrl: 'https://picsum.photos/id/237/300/200',
      timeAgo: '2 days ago',
      listItems: ['Cras justo odio', 'Dapibus ac facilisis in', 'Vestibulum at eros'],
    },
    {
      id: 2,
      title: 'Designed Card Title 2',
      text: 'Another designed card with different content. Customize this text as needed.',
      imageUrl: 'https://picsum.photos/id/238/300/200',
      timeAgo: '5 days ago',
      listItems: ['Lorem ipsum dolor', 'Sit amet consectetur', 'Adipiscing elit'],
    },
    {
      id: 3,
      title: 'Designed Card Title 3',
      text: 'Each card can have unique content, including images, text, and list items.',
      imageUrl: 'https://picsum.photos/id/239/300/200',
      timeAgo: '1 week ago',
      listItems: ['Phasellus laoreet', 'Curabitur euismod', 'Vestibulum velit'],
    },
    {
      id: 4,
      title: 'Designed Card Title 4',
      text: 'This card showcases a different set of content from the others.',
      imageUrl: 'https://picsum.photos/id/240/300/200',
      timeAgo: '3 hours ago',
      listItems: ['Sed fringilla', 'Aenean commodo', 'Pellentesque a libero'],
    },
  ];
export default function Cards()
{
    return (<div className="container">
        
        {cardData.map((card)=><div key={card.id}><Card data={card}/></div>)}
    </div>)
}
