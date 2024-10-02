import './AppDw.css'
import {assets}  from '../../assets/assets'
const AppDw = () => {
  return (
    <div  className='app-download' id='app-download'>
      <p>For Better Experience download <br />
      Tomato App
      </p>

      <div className='app-download-platforms'>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}
export default AppDw