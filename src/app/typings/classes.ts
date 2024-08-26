export type TypedClasse = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  roles: string[];
  story: {
      title: string;
      subtitle: string;
      body: string;
      scenes: {
          photo1: {
              title: string;
              body: string;
              image_path: string;
          };
          photo2: {
            title: string;
            body: string;
            image_path: string;
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

