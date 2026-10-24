import bag from "./assets/bag1.png"
import star from "./assets/Star 2.svg"

function App() {
  return (
    <>
    <div className="card flex flex-col w-75">
      <div className="card-top flex flex-col items-center gap-1.25 py-4">
        <p>Deal of the Day</p>
        <div className="date flex flex-col items-center">
          <div className="flex items-center gap-1.5">
            <span>12</span>
            <span>:</span>
            <span>43</span>
            <span>:</span>
            <span>12</span>
          </div>
          <div className="date-info flex gap-5">
            <span>hour</span>
            <span>min</span>
            <span>sec</span>
          </div>
        </div>
      </div>
      <div className="card-mid flex items-center justify-center h-40.5">
        <img src={bag} alt="product image" />
      </div>
      <div className="card-down flex flex-col gap-1.5 py-4 px-10">
        <h3>Tonny Black</h3>
        <p>shoulder bag-White-Plain</p>
        <div className="rating flex">
          <div>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <span>54</span>
        </div>
        <div className="price flex items-center justify-between">
          <span>50$</span>
          <del>100$</del>
          <span className="">-40%</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
