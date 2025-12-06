export const useAxios = () => {
  return {
    post: (url, data) => {
      // بدل API حقيقي
      console.log("Fake POST to:", url, data);
      return Promise.resolve({ data: "OK" });
    }
  };
};
