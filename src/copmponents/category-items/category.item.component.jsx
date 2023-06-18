import '../category-items/category.items.style.scss'

const CategoryItems = ({category}) => {
  // const { imageUrl, title } = category;

  return(
    <div className="categories-container">
      {category.map(({ title, imageUrl }) => {
        return (
          <div
           
            className="category-container"
            style={{
              background: `url(${imageUrl})`,
            }}
          >
            
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );

    

}

export default CategoryItems;