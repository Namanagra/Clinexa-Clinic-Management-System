import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='biography container'>
      <div className="banner">
        <img src={imageUrl} alt="aboutIMG" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat aliquid accusamus enim inventore nisi numquam accusantium labore dolor fugiat iure adipisci at, esse sequi quam corrupti repudiandae quibusdam voluptatum voluptatibus earum. Deserunt dolores error fugiat ullam. Quasi ipsam ab dolorum accusamus quos sed ad dicta, non, quod harum incidunt labore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aperiam quod voluptatem inventore molestias facere repellat minus minima soluta corporis ratione, dolorem maxime illo numquam. Fugiat, ex inventore voluptate molestias adipisci voluptas atque quia id?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem eaque quos porro.
        </p>
        <p>
          Lorem, ipsum dolor.
        </p>
      </div>
    </div>
  )
}

export default Biography