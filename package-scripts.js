module.exports = {
  scripts: {
    start: 'react-scripts start',
    dev: 'REACT_APP_API_HOST=http://localhost:8003 react-scripts start',
    build: 'react-scripts build',
    test: {
      watch: 'react-scripts test',
    },
    eject: 'react-scripts eject',
    type: `tsc -b`,
    lint: 'eslint --ext .ts,.tsx,.jsx,.jsx src --fix',
    care: `nps build type lint`,
  },
}
