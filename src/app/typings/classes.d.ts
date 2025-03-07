export type TypedClasse = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  roles: string[];
  statsSheet: {
    primaryAttribute: string,
        skillsThrowsProfs: string[],
        skillsThrowsAmount: number,
        weaponyProfs: string[],
        armoryProfs: string[],
        startingItems: TypedStartingItems[]
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
export type TypedAttribute = "Corpo" | "Mente" | "Agilidade" | ""

export type TypedSavingThrowsProfs = "História" | "Religião" | "Natureza" | "Arcanismo" | "" | "..."

export type TypedStartingItems = {
  body: string
  mainHand: string
  offHand: string
  extras: string[]
}

export type TypedCast = {
  name: string;
  subname: string;
  pre_path: string;
  image_path: string;
}
