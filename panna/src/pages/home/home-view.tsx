import PlayerSoccerIcon from 'assets/icons/player-icon'
import FooterPage from 'components/footer-page/footer-page'
import InputUploadMatchDayImage from 'components/input-upload-image-matchday/input-upload-image-matchday'
import InputUploadTeamImage from 'components/input-upload-image-team/input-upload-image-team'
import InputUploadImage from 'components/input-upload-image/input-upload-image'
import React from 'react'
import {
  ContainerImage,
  ContainerImages,
  ContainerMatchDayStyled,
  ContainerNoticiesStyled,
  ContainerStyled,
  ContainerTeamsStyled,
  ContainerVideoStyled,
  TitleInicialNoticieStyled,
  TitleTeamsStyled,
  TraceStyled
} from './home.styled'

const HomePageView: React.FC = () => {
  return (
    <ContainerStyled>
      <ContainerImage>
        <PlayerSoccerIcon />
      </ContainerImage>
      <TitleInicialNoticieStyled>Jornada ao vivo!</TitleInicialNoticieStyled>
      <ContainerNoticiesStyled>
        <ContainerImages>
          <InputUploadImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=290&h=193&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2022%2F10%2FManchester-City-v-Manchester-United-Premier-League-1664722893-1000x750.jpg'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Notícia 01"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=290&h=193&dpr=2&image=https%3A%2F%2Ficdn.caughtoffside.com%2Fwp-content%2Fuploads%2F2022%2F05%2FBrunolage.jpg'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Notícia 02"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=290&h=193&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2022%2F10%2FManchester-City-v-Manchester-United-Premier-League-1664718202-1000x750.jpg'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Notícia 03"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=290&h=193&dpr=2&image=https%3A%2F%2Ficdn.football-espana.net%2Fwp-content%2Fuploads%2F2022%2F02%2Fal-khelaifi-florentino.jpeg'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Notícia 04"
          />
        </ContainerImages>
      </ContainerNoticiesStyled>
      <TraceStyled />
      <TitleTeamsStyled>Jogos da Semana</TitleTeamsStyled>

      <ContainerVideoStyled>
        <video controls={true} autoPlay={true} width="400" height="300">
          <source
            src="https://www.youtube.com/watch?v=NmiYL6WBMKs"
            type="video/mp4"
          />
        </video>
        <video controls={true} autoPlay={true} width="400" height="300">
          <source
            src="https://www.youtube.com/watch?v=NmiYL6WBMKs"
            type="video/mp4"
          />
        </video>
        <video controls={true} autoPlay={true} width="400" height="300">
          <source
            src="https://www.youtube.com/watch?v=NmiYL6WBMKs"
            type="video/mp4"
          />
        </video>
      </ContainerVideoStyled>
      <TraceStyled />
      <TitleTeamsStyled>Times Favoritos</TitleTeamsStyled>
      <ContainerTeamsStyled>
        <ContainerImages>
          <InputUploadTeamImage
            urlImage={
              'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Corinthians"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadTeamImage
            urlImage={
              'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Flamengo"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadTeamImage
            urlImage={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Bayer de Munique"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadTeamImage
            urlImage={
              'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Real Madrid"
          />
        </ContainerImages>
      </ContainerTeamsStyled>
      <TraceStyled />
      <TitleTeamsStyled>Competições Populares</TitleTeamsStyled>

      <ContainerTeamsStyled>
        <ContainerImages>
          <InputUploadTeamImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=48&h=48&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252FleagueColoredCompetition%252F128%252F16.png'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Brasileirão Série A"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadTeamImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=48&h=48&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252FleagueColoredCompetition%252F128%252F5.png'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Champions League"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadTeamImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=48&h=48&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252FleagueColoredCompetition%252F128%252F76.png'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Libertadores"
          />
        </ContainerImages>

        <ContainerImages>
          <InputUploadTeamImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=48&h=48&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252FleagueColoredCompetition%252F128%252F9.png'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="Premier League"
          />
        </ContainerImages>
      </ContainerTeamsStyled>
      <TraceStyled />
      <TitleTeamsStyled>Jornada ao vivo!</TitleTeamsStyled>
      <ContainerMatchDayStyled>
        <ContainerImages>
          <InputUploadMatchDayImage
            urlImage={
              'https://image-service.onefootball.com/transform?w=840&h=472&dpr=2&image=https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2022%2F10%2FLeeds-United-v-Aston-Villa-Premier-League-1664729489-1000x750.jpg'
            }
            handleSelectedImage={() => null}
            hasError={false}
            title="📸 LEEDS DOWN TO 10-MEN AFTER RIDICULOUS LUIS SINISTERRA RED CARD. With the game level, Leeds were reduced to 10 men at home to Aston Villa as Luis Sinisterra received one of the most ridiculous red cards you’ll ever see."
          />
        </ContainerImages>
      </ContainerMatchDayStyled>
      <TraceStyled />
      <FooterPage />
    </ContainerStyled>
  )
}

export default HomePageView
