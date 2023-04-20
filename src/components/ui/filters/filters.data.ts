const filtersData = {
  action: 'Боевики',
  biography: 'Биография',
  detective: 'Детективы',
  children: 'Для детей',
  documentary: 'Документальные',
  drama: 'Драмы',
  foreign: 'Зарубежные',
  historical: 'Исторические',
  comedy: 'Комедии',
  crime: 'Криминал',
  melodrama: 'Мелодрамы',
  russian: 'Русские',
  adventures: 'Приключения',
  family: 'Семейные',
  soviet: 'Советские',
  sport: 'Спорт',
  thriller: 'Триллеры',
  fantastic: 'Фантастика',
  fantasy: 'Фэнтези',
  blr: 'Беларусь',
  bra: 'Бразилия',
  irl: 'Ирдандия',
  kaz: 'Казахстан',
  kgz: 'Киргизия',
  lva: 'Латвия',
  mda: 'Молдова',
  rus: 'Россия',
  ussr: 'СССР',
  usa: 'США',
  uk: 'Украина',
  jpn: 'Япония'
}

export const filtersMap = new Map(Object.entries(filtersData))