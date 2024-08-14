import { SectionList, StyleSheet, Text, View } from "react-native";
import nbaTeams from "../data/nbaTeams";


const HomeScreen = () => {
  // Array of image imports
  const imagePaths = {
    "Atlanta Hawks": require('/assets/nba-teams-imgs/atlanta-hawks.png'),
    "Boston Celtics": require('/assets/nba-teams-imgs/boston-celtics.png'),
    "Brooklyn Nets": require('/assets/nba-teams-imgs/brooklyn-nets.png'),
    "Charlotte Hornets": require('/assets/nba-teams-imgs/charlotte-hornets.png'),
    "Chicago Bulls": require('/assets/nba-teams-imgs/chicago-bulls.png'),
    "Cleveland Cavaliers": require('/assets/nba-teams-imgs/cleveland-cavaliers.png'),
    "Dallas Mavericks": require('/assets/nba-teams-imgs/dallas-mavericks.png'),
    "Denver Nuggets": require('/assets/nba-teams-imgs/denver-nuggets.png'),
    "Detroit Pistons": require('/assets/nba-teams-imgs/detroit-pistons.png'),
    "Golden State Warriors": require('/assets/nba-teams-imgs/golden-state-warriors.png'),
    "Houston Rockets": require('/assets/nba-teams-imgs/houston-rockets.png'),
    "Indiana Pacers": require('/assets/nba-teams-imgs/indiana-pacers.png'),
    "LA Clippers": require('/assets/nba-teams-imgs/los-angeles-clippers.png'),
    "Los Angeles Lakers": require('/assets/nba-teams-imgs/los-angeles-lakers.png'),
    "Memphis Grizzlies": require('/assets/nba-teams-imgs/memphis-grizzlies.png'),
    "Miami Heat": require('/assets/nba-teams-imgs/miami-heat.png'),
    "Milwaukee Bucks": require('/assets/nba-teams-imgs/milwaukee-bucks.png'),
    "Minnesota Timberwolves": require('/assets/nba-teams-imgs/minnesota-timberwolves.png'),
    "New Orleans Pelicans": require('/assets/nba-teams-imgs/new-orleans-pelicans.png'),
    "New York Knicks": require('/assets/nba-teams-imgs/new-york-knicks.png'),
    "Oklahoma City Thunder": require('/assets/nba-teams-imgs/oklahoma-city-thunder.png'),
    "Orlando Magic": require('/assets/nba-teams-imgs/orlando-magic.png'),
    "Philadelphia 76ers": require('/assets/nba-teams-imgs/philadelphia-76ers.png'),
    "Phoenix Suns": require('/assets/nba-teams-imgs/phoenix-suns.png'),
    "Portland Trail Blazers": require('/assets/nba-teams-imgs/portland-trail-blazers.png'),
    "Sacramento Kings": require('/assets/nba-teams-imgs/sacramento-kings.png'),
    "San Antonio Spurs": require('/assets/nba-teams-imgs/san-antonio-spurs.png'),
    "Toronto Raptors": require('/assets/nba-teams-imgs/toronto-raptors.png'),
    "Utah Jazz": require('/assets/nba-teams-imgs/utah-jazz.png'),
    "Washington Wizards": require('/assets/nba-teams-imgs/washington-wizards.png')
};
  const getTeamsByDivision = (division) =>
    nbaTeams.filter((team) => team.division === division);

    const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        {images[item.key] && <Image source={images[item.key]} style={styles.image} />}
        <Text style={styles.item}>{item.key}</Text>
      </View>
    );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  const sections = [
    { title: "Atlantic", data: getTeamsByDivision("Atlantic") },
    { title: "Central", data: getTeamsByDivision("Central") },
    { title: "Northwest", data: getTeamsByDivision("Northwest") },
    { title: "Pacific", data: getTeamsByDivision("Pacific") },
    { title: "Southeast", data: getTeamsByDivision("Southeast") },
    { title: "Southwest", data: getTeamsByDivision("Southwest") },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "lightgray",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;