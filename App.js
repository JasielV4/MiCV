import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/112647744?s=400&u=2482fdfd2496f1cabf8e90e6a842e08133449da0&v=4' }}
          style={styles.pfp}
        />
        <View>
          <Text style={styles.name}>Jorge Jasiel Salmerón Vega</Text>
          <Text style={styles.title}>Estudiante, Ingeniero de Software</Text>
        </View>
      </View>

      <Section title="Perfil Profesional">
        <Text style={styles.sectionContent}>Soy un estudiante.</Text>
      </Section>

      <Section title="Formación">
        <Text style={styles.sectionContent}>• Ingeniería de Software de 6to semestre - Universidad Autónoma de Querétaro (UAQ)</Text>
        <Text style={styles.sectionContent}>• Primaria, Secundaria y Preparatoria</Text>
      </Section>

      <Section title="Habilidades">
        <Text style={styles.sectionContent}>• Nivel medio de Python</Text>
        <Text style={styles.sectionContent}>• Aprendiendo actualmente C#. Nivel bajo de C#</Text>
        <Text style={styles.sectionContent}>• Nivel medio de SQL Server</Text>
        <Text style={styles.sectionContent}>• Nivel bajo de JAVA</Text>
        <Text style={styles.sectionContent}>• Nivel medio de inglés</Text>
      </Section>

      <Section title="Aficiones">
        <Text style={styles.sectionContent}>• Me gustan los videojuegos y juegos en general.</Text>
        <Text style={styles.sectionContent}>• Me gusta aprender diferentes cosas y no estancarme en algo.</Text>
        <Text style={styles.sectionContent}>• Me gusta leer tanto en españos como en inglés diferentes generos literarios</Text>
        <Text style={styles.sectionContent}>• Me gusta todo tipo de música</Text>
      </Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  pfp: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    color: '#555',
  },
  section: {
    marginVertical: 16,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 18,
  },
});

export default App;