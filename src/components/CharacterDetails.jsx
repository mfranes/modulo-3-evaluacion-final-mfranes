import '../styles/CharacterDetails.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function CharacterDetails({character}) {

    return (
        <section className='characterDetailsSection'>
            <div className='characterDetailsSection__back'>
                <Link className={'characterDetailsSection__back__link'} to='/'>
                    {'<'} Volver
                </Link>
            </div>
            <article className='characterDetailsSection__card'>
                <img src='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/1.jpeg' />
                <div className='characterDetailsSection__card__text'>
                    <p className='characterDetailsSection__card__text__name'>{character.name}</p>
                    <p>Status: {character.status}</p>
                    <p>Specie: {character.specie}</p>
                    <p>Origin: {character.origin}</p>
                    <p>Episodes: {character.numberOfepisodes}</p>
                </div>
            </article>
        </section>
    );

}

CharacterDetails.propTypes = {
    character: PropTypes.object
};

export default CharacterDetails;