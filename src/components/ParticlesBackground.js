import Particles from "react-particles";
import particlesConfig from './config/particles-config';

const ParticlesBackground = () => {
    return (
        <Particles params={particlesConfig} />
    );
};

export default ParticlesBackground;