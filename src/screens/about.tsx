import React from "react";
import "../App.css";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="container">
      <div className="page-body">
        <Title text="About" />
        <div className="home-text">
          <div className="text-block">
            <p>
              &emsp;The framework aims to automatically identify various regions
              within a hyperspectral image by classifying each pixel of the
              image and associating them to class segments. A multi-layer system
              will be developed, where each layer’s responsibility is to perform
              an operation on its input, generate region classification data,
              and pass the resultant output to the next layer. Importantly, each
              layer analyzes its input from distinct viewpoints, utilizing
              spectral and spatial data, resulting in a multi-layer
              frameworkwhere the layers complement each other. Since the system
              is highly parallelizable, we will exploit high performance
              computing (HPC) tools and resources to achieve a real-time
              performance.
            </p>
          </div>

          <div className="text-block">
            <p>
              &emsp;Although the proposed framework is a domain independent
              solution, it will be applied to the atmospheric cloud detection
              problem, where cloud albedos on the earth’s surface are measured
              by field experts. This problem has been chosen for two reasons: 1)
              cloud detection is a unique and challenging problem involving
              multi-class classification and segmentation to evaluate the
              framework; and 2) to the best of our knowledge, HSI has not been
              applied to the cloud detection problem. With the rich spectral
              information from a large portion of the spectrum, HSI has a big
              potential for accurate cloud region detection. The initial data
              analysis perfomed supported this argument by identifying
              informative features at beyond visible light.
            </p>
          </div>

          <div className="text-block">
            <p>
              The research will introduce multiple novel ideas including:
              <ol>
                <li>
                  A multi-layer segmenta-tion (region classification) system in
                  hyperspectral images
                </li>
                <li>
                  Two novel pixel classification methods basedon spectral band
                  features
                </li>
                <li>
                  A new probability based classifier based on spatial features
                </li>
                <li>
                  Integration of real-time optimization using HPC techniques
                </li>
                <li>
                  Preparation of the framework as an open-source software for
                  the research community
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
