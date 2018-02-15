function printInfoAboutMusicalTrack(data) {
    let trackName = data[0];
    let artistName = data[1];
    let time = data[2];

    console.log(`Now Playing: ${artistName} - ${trackName} [${time}]`);
}

printInfoAboutMusicalTrack(['Number One', 'Nelly', '4:09']);
