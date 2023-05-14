import React from "react";
import ReactHowler from "react-howler";
import "/src/styles/Sound.css";

class SoundPlayer extends React.Component<{}, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      sounds: [
        {
          name: "birds",
          src: "/audio/birds.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/birds.svg",
        },
        {
          name: "coffee-shop",
          src: "/audio/coffee-shop.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/coffee-shop.svg",
        },
        {
          name: "fire",
          src: "/audio/fire.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/fire.svg",
        },
        {
          name: "night",
          src: "/audio/night.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/night.svg",
        },
        {
          name: "plane",
          src: "/audio/plane.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/plane.svg",
        },
        {
          name: "rain",
          src: "/audio/rain.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/rain.svg",
        },
        {
          name: "storm",
          src: "/audio/storm.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/storm.svg",
        },
        {
          name: "train",
          src: "/audio/train.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/train.svg",
        },
        {
          name: "water",
          src: "/audio/water.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/water.svg",
        },
        {
          name: "beach",
          src: "/audio/beach.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/beach.svg",
        },
        {
          name: "leaves",
          src: "/audio/leaves.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/leaves.svg",
        },
        {
          name: "wind",
          src: "/audio/wind.mp3",
          isPlaying: false,
          volume: 1.0,
          icon: "/icons/wind.svg",
        },
      ],
      globalVolume: 1.0,
    };
    this.handlePlaySound = this.handlePlaySound.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleGlobalVolumeChange = this.handleGlobalVolumeChange.bind(this);
  }

  handlePlaySound(sound: { name: any }) {
    const newSounds = [...this.state.sounds];
    const soundIndex = newSounds.findIndex((s) => s.name === sound.name);
    newSounds[soundIndex].isPlaying = !newSounds[soundIndex].isPlaying;
    this.setState({ sounds: newSounds });
  }

  handleVolumeChange(sound: { name: any }, volume: number) {
    const newSounds = [...this.state.sounds];
    const soundIndex = newSounds.findIndex((s) => s.name === sound.name);
    newSounds[soundIndex].volume = volume;
    this.setState({ sounds: newSounds });
  }

  handleGlobalVolumeChange(volume: number) {
    this.setState({ globalVolume: volume });
  }

  render() {
    const { sounds, globalVolume } = this.state;

    return (
      <div className="sound-player">
        <h3>Overall Volume</h3>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={globalVolume}
          onChange={(e) =>
            this.handleGlobalVolumeChange(parseFloat(e.target.value))
          }
        />
        <div className="sound-list">
          <div className="column">
            {sounds
              .slice(0, Math.ceil(sounds.length / 2))
              .map(
                (sound: {
                  name: React.Key | null | undefined;
                  isPlaying: boolean | undefined;
                  icon: string | undefined;
                  volume: string | number | readonly string[] | undefined;
                  src: string | string[];
                }) => (
                  <div key={sound.name}>
                    <button
                      onClick={() => this.handlePlaySound(sound)}
                      className={`icon ${
                        sound.isPlaying ? "playing" : "paused"
                      }`}
                    >
                      <img
                        src={sound.icon}
                        alt="Icon"
                        className={`icon ${
                          sound.isPlaying ? "playing" : "paused"
                        }`}
                      />
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.1}
                      value={sound.volume}
                      onChange={(e) =>
                        this.handleVolumeChange(
                          sound,
                          parseFloat(e.target.value)
                        )
                      }
                      className={`icon ${
                        sound.isPlaying ? "playing" : "paused"
                      }`}
                    />
                    <ReactHowler
                      src={sound.src}
                      playing={sound.isPlaying}
                      volume={Number(sound.volume) * globalVolume}
                      loop={true}
                    />
                  </div>
                )
              )}
          </div>
          <div className="column">
            {sounds
              .slice(Math.ceil(sounds.length / 2))
              .map(
                (sound: {
                  name: React.Key | null | undefined;
                  isPlaying: boolean | undefined;
                  icon: string | undefined;
                  volume: string | number | readonly string[] | undefined;
                  src: string | string[];
                }) => (
                  <div key={sound.name}>
                    <button
                      onClick={() => this.handlePlaySound(sound)}
                      className={`icon ${
                        sound.isPlaying ? "playing" : "paused"
                      }`}
                    >
                      <img
                        src={sound.icon}
                        alt="Icon"
                        className={`icon ${
                          sound.isPlaying ? "playing" : "paused"
                        }`}
                      />
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.1}
                      value={sound.volume}
                      onChange={(e) =>
                        this.handleVolumeChange(
                          sound,
                          parseFloat(e.target.value)
                        )
                      }
                      className={`icon ${
                        sound.isPlaying ? "playing" : "paused"
                      }`}
                    />
                    <ReactHowler
                      src={sound.src}
                      playing={sound.isPlaying}
                      volume={Number(sound.volume) * globalVolume}
                      loop={true}
                    />
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default SoundPlayer;
