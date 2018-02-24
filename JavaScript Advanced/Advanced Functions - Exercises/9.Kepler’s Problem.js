function getEccentricAnomaly(eccentricAnomaly, eccentricity) {
    eccentricAnomaly = (eccentricAnomaly * 180) / Math.PI;
    let anomaly = getAnomaly(eccentricity, eccentricAnomaly, 9);
    console.log(anomaly);

    function getAnomaly(currentEccentricity, currentEccentricAnomaly, precision) {
        let pi = Math.PI;
        let delta = Math.pow(10, -precision);

        currentEccentricAnomaly /= 360.0;
        currentEccentricAnomaly = 2.0 * pi * (currentEccentricAnomaly - Math.floor(currentEccentricAnomaly));

        let e = currentEccentricAnomaly;
        let f = e - currentEccentricity * Math.sin(currentEccentricAnomaly) - currentEccentricAnomaly;

        while ((Math.abs(f) > delta)) {
            e = e - f / (1.0 - currentEccentricity * Math.cos(e));
            f = e - currentEccentricity * Math.sin(e) - currentEccentricAnomaly;
        }

        return Math.round(e * Math.pow(10, precision)) / Math.pow(10, precision);
    }
}

getEccentricAnomaly(0.25, 0.99);