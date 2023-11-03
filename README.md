# Shashin-shu (Photo Album)

Task for the `Fresher React JS Developers` at ollyo.

## Objective:

Create a responsive image gallery using React JS with the following features: reordering, deleting multiple images, and setting a feature image. The gallery should be visually appealing and provide a seamless user experience.

### Task Requirment

1. **Gallery Layout:**
   - Implement a grid layout for the image gallery.
   - The gallery should display images with one feature image larger than the others.
2. **Sorting:**
   - Enable reordering functionality to allow users to rearrange the order of images in the gallery.
   - Implement drag-and-drop functionality or any other intuitive method for reordering.
3. **Deleting Multiple Images:**
   - Allow users to select multiple images and delete them.
   - Provide a clear visual indication of selected images.
4. **Setting Feature Image:**
   - Allow users to set a feature image by sorting.
   - Pretend the first image (from the LTR direction) as the featured image
   - The feature image should be visually distinct from the other images.
5. **User Experience:**
   - Ensure a smooth and responsive user experience.
   - Implement transitions or animations for a polished look and feel.
6. **Live Demo:**
   - Host your React JS image gallery on any platform of your choice.
   - Share the live URL of your task with us for assessment.
   - Our verdict would be considered as rejected if your live URL link does not work.

### Task breakdown(1-11-23)

0. Base
   [] starter project.
   [] setup and finalize css libaries , icons , state-management tools and task breakdown
1. layout

   - [] Implement layout as per image shown.
     - header, body
     - card conponent
   - [] make the layout responsive.(mobile-tab-full)
   - [] create buttons for selection and deletation.(non-funtional).
   - [] visual selection check-box on image.
   - [] feature image should be visuall distinct and should be on the left hand side of the gallary.
   - [] have max width set to 1280px

2. Image layer
   [] Think of a image model to facilitate sorting, uploading, DnD, order-reorder and deletation.
   [] should i have a Bass for image uploading and storing ? it is better to do it all from FE.
   [] Upload image.
   [] upload multiple image.
   [] selected images to delete,
   [] make a fallback image to be set to featured image if feature image is deleted.

3. sorting with dnd/intuative method
   [ ] libary or bear-bone -- decide
   [ ] crate the dnd div, (main image container )
   [ ] snap to grid while droping to the position/targeted div or order.
   [ ] update api/state accordng to the new order.
   [ ] if api update to the new order has been failed show error message and fallback to previous order.
   [ ] if there is no api and all are handelled lacally find a way to implement the same corner-case mentioned above.

   TBA

4. user experience

5. deployment

### Work-log
