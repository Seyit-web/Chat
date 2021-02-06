

import loader from './loader.gif'

const Loader = () => {
    return (
        <div className='loader'>
            <img style={{width: '100%'}} src={loader} alt='Loading...' />
        </div>
    )
}

export default Loader