export const categoryMapper = {
    story: {
        label: 'Story',
        icon: (
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"> 
                        <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"/>
            </svg>
        )
    },
    podcast: {
        label: 'Podcast',
        icon: (
            <svg width="24" height="24" viewBox="0 0 256 256">
                <g transform="translate(128 128) scale(0.72 0.72)">
                    <g transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" >
                    <path d="M 45 70.968 c -16.013 0 -29.042 -13.028 -29.042 -29.042 c 0 -1.712 1.388 -3.099 3.099 -3.099 c 1.712 0 3.099 1.388 3.099 3.099 C 22.157 54.522 32.404 64.77 45 64.77 c 12.595 0 22.843 -10.248 22.843 -22.843 c 0 -1.712 1.387 -3.099 3.099 -3.099 s 3.099 1.388 3.099 3.099 C 74.042 57.94 61.013 70.968 45 70.968 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 45 60.738 L 45 60.738 c -10.285 0 -18.7 -8.415 -18.7 -18.7 V 18.7 C 26.3 8.415 34.715 0 45 0 h 0 c 10.285 0 18.7 8.415 18.7 18.7 v 23.337 C 63.7 52.322 55.285 60.738 45 60.738 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 45 89.213 c -1.712 0 -3.099 -1.387 -3.099 -3.099 V 68.655 c 0 -1.712 1.388 -3.099 3.099 -3.099 c 1.712 0 3.099 1.387 3.099 3.099 v 17.459 C 48.099 87.826 46.712 89.213 45 89.213 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 55.451 90 H 34.549 c -1.712 0 -3.099 -1.387 -3.099 -3.099 s 1.388 -3.099 3.099 -3.099 h 20.901 c 1.712 0 3.099 1.387 3.099 3.099 S 57.163 90 55.451 90 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </g>
            </svg>
        )
    }
};

export const startupStageMapper = {
    preSeed: {
        label: 'Pre Seed',
        icon: '🧩'
    },
    seed: {
        label: 'Seed',
        icon: '🥑'
    },
    seriesA: {
        label: 'Series A',
        icon: '🌱'
    },
    seriesBD: {
        label: 'Series B-D',
        icon: '🌿'
    },
    seriesEG: {
        label: 'Series E-G',
        icon: '🪴'
    },
    seriesH: {
        label: 'Series H',
        icon: '🌴'
    },
    ipo: {
        label: 'IPO',
        icon: '💶'
    },
};
