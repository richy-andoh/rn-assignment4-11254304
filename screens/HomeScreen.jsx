import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//import JobCard from '../components/JobCard';

const popularJobs = [
  { id: '1', title: 'Software Engineer', company: 'ABC Corp', location: 'New York, NY' },
  { id: '2', title: 'Product Manager', company: 'XYZ Inc', location: 'San Francisco, CA' },
 
];

const featuredJobs = [
  { id: '1', title: 'Data Scientist', company: 'Tech Solutions', location: 'Austin, TX' },
  { id: '2', title: 'UX Designer', company: 'Design Studio', location: 'Seattle, WA' },

];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {name}</Text>
      <Text style={styles.subheader}>Email: {email}</Text>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {/* <FlatList
        data={popularJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});
