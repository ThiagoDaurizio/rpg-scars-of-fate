import { classesIcons } from "../assets/icons"

export const getClasseIcon = (classeId: string) => {
  const classeMap: { [key: string]: keyof typeof classesIcons } = {
    'warriorId': 'Warrior',
    'clericId': 'Cleric',
    'mageId': 'Mage',
    'druidId': 'Druid',
    'acolyteId': "Acolyte",
    'wildenId': "Wilden"
  }

  const classeName = classeMap[classeId]
  if (classeName) {
    return classesIcons[classeName]
  }
  return null
}