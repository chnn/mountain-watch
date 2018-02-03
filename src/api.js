const LOCATIONS_FIXTURE = [
  {gps: '45.3736219,-121.7003285', name: 'Mt. Hood', id: '1'},
  {gps: '46.860203,-121.7849626', name: 'Mt. Rainer', id: '2'},
  {gps: '48.537632,-121.1386604', name: 'Eldorado Peak', id: '3'},
]

export const LOCATION_IMAGES_FIXTURE = [
  {
    id: '1',
    locationId: '2',
    imgUrl: 'https://picsum.photos/600/600?random',
    thumbnailUrl: 'https://picsum.photos/150/150?random',
    user: 'chnn',
    description: 'Some image 1.',
    externalLink: 'https://www.instagram.com',
  },
  {
    id: '2',
    locationId: '1',
    imgUrl: 'https://picsum.photos/600/600?random',
    thumbnailUrl: 'https://picsum.photos/150/150?random',
    user: 'chnn',
    description: 'Some image 2.',
    externalLink: 'https://www.instagram.com',
  },
]

const timeout = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export const fetchLocations = async () => {
  await timeout(1500)

  return LOCATIONS_FIXTURE
}

export const fetchImagesForLocation = async locationId => {
  await timeout(1000)

  return LOCATION_IMAGES_FIXTURE.filter(x => x.locationId === locationId)
}
