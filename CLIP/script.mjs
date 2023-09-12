let quantized = false; // change to `true` for a much smaller model (e.g. 87mb vs 345mb for image model), but lower accuracy
import { AutoProcessor, CLIPVisionModelWithProjection, RawImage, AutoTokenizer, CLIPTextModelWithProjection } from '@xenova/transformers';
let imageProcessor = await AutoProcessor.from_pretrained('Xenova/clip-vit-base-patch16');
let visionModel = await CLIPVisionModelWithProjection.from_pretrained('Xenova/clip-vit-base-patch16', {quantized});
let tokenizer = await AutoTokenizer.from_pretrained('Xenova/clip-vit-base-patch16');
let textModel = await CLIPTextModelWithProjection.from_pretrained('Xenova/clip-vit-base-patch16', {quantized});

function cosineSimilarity(A, B) {
  if(A.length !== B.length) throw new Error("A.length !== B.length");
  let dotProduct = 0, mA = 0, mB = 0;
  for(let i = 0; i < A.length; i++){
    dotProduct += A[i] * B[i];
    mA += A[i] * A[i];
    mB += B[i] * B[i];
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  let similarity = dotProduct / (mA * mB);
  return similarity;
}

// get image embedding:
let image = await RawImage.read('BradPitt.JPG');
let imageInputs = await imageProcessor(image);
let { image_embeds } = await visionModel(imageInputs);
console.log(image_embeds.data);

// get text embedding:
let texts = ['a photo of a human with a beard'];
let textInputs = tokenizer(texts, { padding: true, truncation: true });
let { text_embeds } = await textModel(textInputs);
console.log(text_embeds.data);

let similarity = cosineSimilarity(image_embeds.data, text_embeds.data);
console.log(similarity);