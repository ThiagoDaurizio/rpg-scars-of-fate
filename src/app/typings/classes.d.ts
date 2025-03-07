enum 

export type TypedClasse = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  roles: string[];
  statsSheet: {
    primaryAttribute: 'Corpo' | 'Espírito' | 'Mente' | 'Agilidade',
        hpCalc: string,
        savingThrowsProfs: string[]
        skillsThrowsProfs: [, ],
        skillsThrowsAmount: 0,
        weaponyProfs: [],
        armoryProfs: [],
        startingItems: [
          {
            body: ,
            mainHand: ,
            offHand: ,
            extras: [, ]
          },
          {
            body: ,
            mainHand: ,
            offHand: ,
            extras: [, ]
          }
        ]
  }
  story: {
      title: string;
      subtitle: string;
      body: string;
      scenes: {
          photo1: {
              title: string;
              body: string;
              image_path: string;
              casts?: TypedCast[]
          };
          photo2: {
            title: string;
            body: string;
            image_path: string;
            casts?: TypedCast[]
          };
          photo3: {
            title: string;
            body: string;
            image_path: string;
            casts?: TypedCast[]
          };
      };
  };
  theme: {
      color: string;
      icon: string;
      image_path: string;
  };
  skills: {
    name: string;
    body: string;
    icon_path: string;
  }[];
}


export type TypedCast = {
  name: string;
  subname: string;
  pre_path: string;
  image_path: string;
}
