"use client";
import getCategories from "./getCategories";

const CategoriesList = () => {
  return (
    <div>
      <h2 className="pb-7 text-4xl font-opensans font-bold">Kategorie</h2>
      <div className="grid gap-4 xl:gap-8 grid-cols-2 lg:grid-cols-4">
        {getCategories()}
      </div>
    </div>
  );
};

export default CategoriesList;
